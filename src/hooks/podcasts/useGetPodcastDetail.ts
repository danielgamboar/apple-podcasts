import { useQuery } from "@tanstack/react-query";
import { getPodcastById } from "../../api/podcasts";
import { QUERY_KEYS } from "../../api/queryKeys";

export const useGetPodcastDetail = (id: string) => {
  const { data: podcast, isLoading } = useQuery({
    enabled: Boolean(id),
    queryKey: [QUERY_KEYS.podcastDetail, id],
    queryFn: () => getPodcastById(id),
    gcTime: 1000 * 60 * 60 * 24,
  });

  return {
    podcast,
    isLoading,
  };
};
