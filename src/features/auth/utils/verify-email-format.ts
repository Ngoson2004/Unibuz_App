import { z } from "zod";

export const verifyEmailFormat = (email: string) => {
  const emailSchema = z.string()
    .email({ message: "Invalid email address format" })
    .refine((email) => email.endsWith(".edu.au"), {
      message: "Email domain must end with .edu.au",
    });

  const result = emailSchema.safeParse(email);

  if (!result.success) {
    return {
      isValid: false,
      email: email,
      message: result.error.issues[0].message,
    };
  }

  return {
    isValid: true,
    email: result.data,
    message: "Valid email address",
  };
};
