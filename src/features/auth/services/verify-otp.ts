import { supabase } from "@/shared/libs/supabase";
import { FunctionsResponse } from "@supabase/functions-js";
export const verifyOTP = async (
  email: string,
  code: number,
): Promise<FunctionsResponse<{ message: string } | { error: string }>> => {
  return await supabase.functions.invoke("verify-otp", {
    body: {
      email,
      code,
    },
  });
};
