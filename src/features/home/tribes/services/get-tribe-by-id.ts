import { supabase } from "@/shared/libs/supabase";

export const getTribeById = async (tribeId: string, userId: string) => {
  const { data, error } = await supabase
    .from("tribe")
    .select("*, tribe_profile(*)")
    .eq("tribe_id", Number(tribeId))
    .eq("creator_id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
};
