import { supabase } from "@/shared/libs/supabase";

export const checkIsLogin = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    return session ?? null;
  } catch (err) {
    console.error("Error checking login status:", err);
    throw err;
  }
};
