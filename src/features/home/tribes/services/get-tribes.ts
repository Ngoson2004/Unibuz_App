import { supabase } from "@/shared/libs/supabase";

export const getTribes = async (userId: string) => {
  return await supabase
    .from("tribe")
    .select("*")
    .eq("creator_id", "f6ee8ab6-87e7-48f4-ba46-6fdbaaa14a99")
    .order("created_at", {
      ascending: false,
    });
};
