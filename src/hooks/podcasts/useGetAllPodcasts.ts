import { useQuery } from "@tanstack/react-query"
import { getAllPodcasts } from "../../api/podcasts"
import { QUERY_KEYS } from "../../api/queryKeys";

export const useGetPodcasts = () => {
  const {
    data: podcasts,
    isLoading,
  } = useQuery({ queryKey: [QUERY_KEYS.allPodcasts], queryFn: getAllPodcasts })

  return {
    feed: podcasts?.feed,
    isLoading,
  };
}