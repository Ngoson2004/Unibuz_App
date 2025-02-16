import { supabase } from "@/shared/libs/supabase";
import { Session, User } from "@supabase/supabase-js";

interface SignInResponse {
  data: {
    user: User | null;
    session: Session | null;
  } | null;
  error: string | null;
}

export const signIn = async (
  email: string,
  password: string,
): Promise<SignInResponse> => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { data, error: null };
  } catch (err) {
    console.error("Error during sign in:", err);
    return {
      data: null,
      error: err instanceof Error ? err.message : "Failed to sign in",
    };
  }
};
