import { supabase } from "@/shared/libs/supabase";
import { FunctionsResponse } from "@supabase/functions-js";

export const checkVerifiedOTP = async (
  email: string,
  code: number,
): Promise<FunctionsResponse<{ message: string } | { error: string }>> => {
  return await supabase.functions.invoke("is-otp-verified", {
    body: { email, code },
  });
};
