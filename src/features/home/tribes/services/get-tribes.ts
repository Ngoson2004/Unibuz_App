import { supabase } from "@/shared/libs/supabase";

export const getTribes = async (userId: string) => {
  const { data, error } = await supabase
    .from("tribe")
    .select("*, tribe_profile(*)")
    .eq("creator_id", userId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
};
