import { supabase } from "@/shared/libs/supabase";
import { FunctionsResponse } from "@supabase/functions-js";

export async function sendOTP(
  email: string,
): Promise<FunctionsResponse<{ success: boolean; cause?: string }>> {
  return await supabase.functions.invoke("send-otp", {
    body: {
      email,
    },
  });
}
