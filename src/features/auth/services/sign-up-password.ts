import { supabase } from "@/shared/libs/supabase";
import { Session, User } from "@supabase/supabase-js";
import { FunctionsResponse } from "@supabase/functions-js";

interface SignUpPasswordResponse {
  data: {
    user: User | null;
    session: Session | null;
  } | null;
  error: string | null;
}

export const invalidateVerifiedOTP = async (
  email: string,
  code: number,
): Promise<FunctionsResponse<{ message: string } | { error: string }>> => {
  try {
    const response = await supabase.functions.invoke(
      "invalidate-verified-otp",
      {
        body: {
          email,
          code,
        },
      },
    );

    if (!response.data) {
      throw new Error("Failed to invalidate OTP");
    }

    return response;
  } catch (err) {
    console.error("Error invalidating OTP:", err);
    throw err;
  }
};

export const signUpPassword = async (
  email: string,
  password: string,
  codeToInvalidate: number,
): Promise<SignUpPasswordResponse> => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    try {
      const invalidateResponse = await invalidateVerifiedOTP(
        email,
        codeToInvalidate,
      );

      if (invalidateResponse.data && "error" in invalidateResponse.data) {
        throw new Error(invalidateResponse.data.error);
      }
    } catch (invalidateErr) {
      throw new Error("Failed to invalidate OTP");
    }

    return { data, error: null };
  } catch (err) {
    console.error("Error during signup:", err);
    return {
      data: null,
      error: err instanceof Error ? err.message : "Failed to sign up",
    };
  }
};
