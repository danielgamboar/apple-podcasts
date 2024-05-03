import { useEffect, useState } from "react";
import { DescriptionCard } from "../../../components/Card/DescriptionCard";
import { EpisodeList } from "../../../components/List/List";
import { useGetPodcasts } from "../../../hooks/podcasts/useGetAllPodcasts";
import { useGetPodcastDetail } from "../../../hooks/podcasts/useGetPodcastDetail";
import useLoadingProvider from "../../../hooks/useLoadingProvider";
import useSelectedPodcastStore from "../../../store/selectedPodcast";

interface PodcastDetailProps {
  id: string;
}

export function PodcastDetail({ id }: PodcastDetailProps) {
  const { podcast, isLoading } = useGetPodcastDetail(id);
  const { feed } = useGetPodcasts();
  const { selectedPodcast, setSelectedPodcast } = useSelectedPodcastStore();
  const { handleLoadingApp } = useLoadingProvider();

  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedPodcast) {
      setAuthor(selectedPodcast["im:artist"].label);
      setImageUrl(selectedPodcast["im:image"][2].label);
      setTitle(selectedPodcast["im:name"].label);
      setDescription(selectedPodcast.summary.label);
    } else {
      const entry = feed?.entry.filter(
        (e) => e.id.attributes["im:id"] === id,
      )[0];
      setSelectedPodcast(entry);
    }
  }, [selectedPodcast, feed?.entry, id, setSelectedPodcast]);

  useEffect(() => {
    handleLoadingApp(isLoading);
  }, [isLoading, handleLoadingApp]);

  return (
    <div className="grid grid-cols-4 gap-4">
      <DescriptionCard
        author={author}
        imageUrl={imageUrl}
        title={title}
        description={description}
        podcastId={id}
        isLoading={isLoading}
      />
      <div className="col-span-3 w-full">
        <div
          className={`border mb-4 p-1 w-full shadow-lg ${
            isLoading ? "bg-blue-300 animate-pulse" : null
          }`}
        >
          <h1
            className={`font-bold text-xl ${
              isLoading ? "bg-blue-200 animate-pulse h-5" : null
            }`}
          >
            {!isLoading ? `Episodes: ${podcast?.resultCount}` : null}
          </h1>
        </div>
        <EpisodeList
          episodes={podcast?.results}
          podcastId={id}
          isLoading={isLoading}
        />
        <div />
      </div>
    </div>
  );
}
