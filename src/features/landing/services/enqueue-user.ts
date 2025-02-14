export const enqueueUser = async (email: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/enqueue-user`,
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
  return await response.json() as { message: string } | {
    error: string;
    errorKey?: string;
  };
};
