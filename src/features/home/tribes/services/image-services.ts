import { supabase } from "@/shared/libs/supabase";

export const uploadImage = async (bucket: string, file: File) => {
  const { data, error } = await supabase.storage.from(bucket).upload(
    file.name,
    file,
    {
      contentType: file.type,
      upsert: false,
      cacheControl: "3600",
    },
  );
  if (error) {
    throw error;
  }
  return data;
};

export const getImagePublicUrl = (bucket: string, objectName: string) => {
  const { data } = supabase
    .storage
    .from(bucket)
    .getPublicUrl(objectName);
  return data.publicUrl;
};
