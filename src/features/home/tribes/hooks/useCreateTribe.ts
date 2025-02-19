import { PostgrestError } from "@supabase/supabase-js";
import { createTribe } from "../services/create-tribe";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useCreateTribe = (
  params: Omit<
    UseMutationOptions<
      Awaited<ReturnType<typeof createTribe>>,
      PostgrestError,
      Parameters<typeof createTribe>[0]
    >,
    "mutationFn"
  >,
) => {
  const mutation = useMutation<
    Awaited<ReturnType<typeof createTribe>>,
    PostgrestError,
    Parameters<typeof createTribe>[0]
  >({
    mutationFn: async (data) => await createTribe(data),
    ...params,
  });

  return mutation;
};
