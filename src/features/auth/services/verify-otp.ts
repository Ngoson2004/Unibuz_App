export const verifyOTP = async (
  email: string,
  otp: string,
): Promise<{ message: string } | { error: string }> => {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verify-otp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ email, otp }),
    },
  );
  const data = await response.json();
  return data;
};
