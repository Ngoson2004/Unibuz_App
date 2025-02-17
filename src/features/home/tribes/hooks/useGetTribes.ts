import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../providers/AuthProvider";
import { getTribes } from "../services/get-tribes";

export const useGetTribes = () => {
  const { user } = useAuth();
  const result = useQuery({
    queryKey: ["tribes", user?.id],
    queryFn: async () => await getTribes(user?.id ?? ""),
    enabled: !!user?.id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: 1000 * 60 * 5,
    refetchIntervalInBackground: false,
  });

  return result;
};
