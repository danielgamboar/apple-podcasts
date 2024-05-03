import { Link } from "wouter";
import type { Result } from "../../types/podcast";
import { formatDate, formatTime, isOdd } from "../../utils";

interface EpisodeItemProps {
  episode: Result;
  index: number;
  episodesLength: number;
  podcastId: string;
  isLoading: boolean;
}
export function EpisodeItem({
  episode,
  index,
  episodesLength,
  podcastId,
  isLoading,
}: EpisodeItemProps) {
  if (isLoading) {
    return (
      <div className={"bg-blue-300 animate-pulse grid grid-cols-6 gap-4"}>
        <p className="bg-blue-200 animate-pulse font-semibold col-span-4 text-blue-400 hover:underline hovert:underline-offset-auto" />
        <p className="bg-blue-200 animate-pulse font-semibold" />
        <p className="bg-blue-200 animate-pulse font-semibold" />
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-6 gap-4 p-1 ${
        index !== episodesLength - 1 ? "border-b border-slate-400" : null
      } ${isOdd(index) ? "bg-slate-100" : null}`}
    >
      <Link
        href={`/podcasts/${podcastId}/episode/${episode.trackId}`}
        className="font-semibold col-span-4 text-blue-400 hover:underline hovert:underline-offset-auto"
      >
        {episode?.trackName}
      </Link>
      <p className="font-semibold">
        {formatDate(new Date(episode?.releaseDate))}
      </p>
      <p className="font-semibold">
        {episode?.trackTimeMillis
          ? formatTime(episode?.trackTimeMillis)
          : "Unknown"}
      </p>
    </div>
  );
}
