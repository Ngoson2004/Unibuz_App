import { supabase } from "@/shared/libs/supabase";
import { sendOTP } from "./send-otp";
import { redirect } from "react-router-dom";

export const checkEmail = async (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  try {
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email address");
    }
    const domain = email.split("@")[1];
    if (!domain.endsWith(".edu.au")) {
      throw new Error("Invalid domain, domain must ends with .edu.au");
    }
    const { data, error } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (error && error.code === "PGRST116") {
      console.log("Email not registered, sending OTP");
      const isSended = await sendOTP(email);
      if (isSended) {
        return {
          redirect: "/auth/verify",
        };
      } else {
        throw new Error("Failed to send OTP");
      }
    } else if (data) {
      return {
        redirect: "/auth/login",
      };
    } else {
      throw new Error("An unknown error occurred");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};
