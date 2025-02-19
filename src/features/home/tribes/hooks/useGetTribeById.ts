import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../../shared/providers/AuthProvider";
import { getTribeById } from "../services/get-tribe-by-id";
import { PostgrestError } from "@supabase/supabase-js";

export const useGetTribeById = (tribeId: string) => {
  const { user } = useAuth();
  const result = useQuery<
    Awaited<ReturnType<typeof getTribeById>>,
    PostgrestError
  >({
    queryKey: ["tribe", user?.id, tribeId],
    queryFn: async () => await getTribeById(tribeId, user?.id ?? ""),
    enabled: !!user?.id && !!tribeId,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: 1000 * 60 * 5,
    refetchIntervalInBackground: false,
  });

  return result;
};
