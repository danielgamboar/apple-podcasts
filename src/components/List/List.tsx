import type { Result } from "../../types/podcast";
import { EpisodeItem } from "./ListItem";

interface EpisodeListProps {
  episodes: Result[] | undefined;
  podcastId: string;
  isLoading: boolean;
}

export function EpisodeList({
  episodes,
  podcastId,
  isLoading,
}: EpisodeListProps) {
  const episodesSorted = episodes
    ?.filter((e) => e.wrapperType !== "track")
    .sort((a, b) => (b.releaseDate > a.releaseDate ? -1 : 1));

  if (isLoading) {
    return (
      <div className="bg-blue-300 animate-pulse p-2 rounded-sm shadow-lg border">
        <div className="bg-blue-200 animate-pulse grid grid-cols-6 gap-4 border-b p-1">
          <p className="bg-blue-100 animate-pulse font-semibold col-span-4" />
          <p className="bg-blue-100 animate-pulse font-semibold" />
          <p className="bg-blue-100 animate-pulse font-semibold" />
        </div>
        <div>
          {episodesSorted?.map((episode, index) => (
            <EpisodeItem
              key={episode.trackId}
              episode={episode}
              index={index}
              episodesLength={episodesSorted.length}
              podcastId={podcastId}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 rounded-sm shadow-lg border">
      <div className="grid grid-cols-6 gap-4 border-b p-1">
        <p className="font-semibold col-span-4">Title</p>
        <p className="font-semibold">Date</p>
        <p className="font-semibold">Duration</p>
      </div>
      <div>
        {episodesSorted?.map((episode, index) => (
          <EpisodeItem
            key={episode.trackId}
            episode={episode}
            index={index}
            episodesLength={episodesSorted.length}
            podcastId={podcastId}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
}
