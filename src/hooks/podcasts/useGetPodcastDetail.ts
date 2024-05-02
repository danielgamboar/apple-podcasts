import { useQuery } from "@tanstack/react-query";
import { getAllPodcasts, getPodcastById } from "../../api/podcasts";
import { QUERY_KEYS } from "../../api/queryKeys";

export const useGetPodcasts = (id: string) => {
  const { data: podcast, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.podcastDetail, id],
    queryFn: ()=>getPodcastById(id),
    gcTime: 1000 * 60 * 60 * 24
  });

  return {
    feed: podcast,
    isLoading,
  };
};
