import { supabase } from "@/shared/libs/supabase";
import { verifyEmailFormat } from "../utils/verify-email-format";

export const checkEmailExists = async (email: string) => {
  const isValidEmail = verifyEmailFormat(email);
  console.log(isValidEmail);
  if (!isValidEmail.isValid) {
    return {
      isRegistered: false,
      ...isValidEmail,
    };
  }

  try {
    const { error } = await supabase.from("users").select("*").eq(
      "email",
      isValidEmail.email,
    ).single();

    if (error && error.code === "PGRST116") {
      return {
        isValid: true,
        isRegistered: false,
        message: "Email not yet registered",
        email: isValidEmail.email,
      };
    }

    return {
      isValid: true,
      isRegistered: true,
      message: "Email already registered",
      email: isValidEmail.email,
    };
  } catch (error) {
    throw new Error("Failed to check email existence");
  }
};
