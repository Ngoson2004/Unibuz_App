import { supabase } from "@/shared/libs/supabase";
import { Tables, TablesInsert } from "@/shared/libs/supabase/types/supabase";
import { getImagePublicUrl, uploadImage } from "./image-services";

type CreateTribeProps = {
  tribe: Omit<
    TablesInsert<"tribe">,
    "tribe_id" | "created_at" | "member_count"
  >;
  img: File | null;
};

type CreateTribeWithImageProps = CreateTribeProps;
type CreateTribeWithoutImageProps = Omit<CreateTribeProps, "img">;

type CreateTribeWithImageResponse = Tables<"tribe"> & {
  tribe_profile: Tables<"tribe_profile">;
};

const createTribeWithImage = async (
  { tribe, img }: CreateTribeWithImageProps,
): Promise<CreateTribeWithImageResponse> => {
  const imageData = await uploadImage("profile-picture", img!);
  const url = getImagePublicUrl("profile-picture", imageData.path);
  // First, insert the tribe without the image url
  const insertedTribeWithoutImage = await createTribeWithoutImage({ tribe });
  // Then, add the image url to the tribe_profile table and link it to the tribe
  const { data, error } = await supabase.from("tribe_profile").insert({
    url: url,
    tribe_id: insertedTribeWithoutImage.tribe_id,
  }).select("*").single();
  if (error) {
    throw error;
  }
  return {
    ...insertedTribeWithoutImage,
    tribe_profile: data,
  };
};

const createTribeWithoutImage = async (
  tribe: CreateTribeWithoutImageProps,
): Promise<Tables<"tribe">> => {
  const { data, error } = await supabase.from("tribe").insert({
    ...tribe,
    member_count: 1,
  }).select("*").single();

  if (error) {
    throw error;
  }
  return data;
};

export const createTribe = async ({ tribe, img }: CreateTribeProps) => {
  if (img) {
    return await createTribeWithImage({ tribe, img });
  }
  return await createTribeWithoutImage({ tribe });
};
