export async function sendOTP(
  email: string,
): Promise<{ success: boolean; cause?: string }> {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-otp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ email }),
    },
  );
  return await response.json();
}
