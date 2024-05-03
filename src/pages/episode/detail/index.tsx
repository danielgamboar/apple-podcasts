import { useEffect, useState } from "react";
import { DescriptionCard } from "../../../components/Card/DescriptionCard";
import { useGetPodcasts } from "../../../hooks/podcasts/useGetAllPodcasts";
import { useGetPodcastDetail } from "../../../hooks/podcasts/useGetPodcastDetail";
import useSelectedPodcastStore from "../../../store/selectedPodcast";

interface EpisodeDetailProps {
  podcastId: string;
  episodeId: string;
}

export function EpisodeDetail({ podcastId, episodeId }: EpisodeDetailProps) {
  const { feed, isLoading } = useGetPodcasts();
  const { selectedPodcast, setSelectedPodcast } = useSelectedPodcastStore();
  const { podcast, isLoading: isLoadingPodcasDetail } =
    useGetPodcastDetail(podcastId);

  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const episode = podcast?.results?.filter(
    (e) => e.trackId === Number.parseInt(episodeId),
  )[0];

  useEffect(() => {
    if (selectedPodcast) {
      setAuthor(selectedPodcast["im:artist"].label);
      setImageUrl(selectedPodcast["im:image"][2].label);
      setTitle(selectedPodcast["im:name"].label);
      setDescription(selectedPodcast.summary.label);
    } else {
      const entry = feed?.entry.filter(
        (e) => e.id.attributes["im:id"] === podcastId,
      )[0];
      setSelectedPodcast(entry);
    }
  }, [selectedPodcast, feed?.entry, podcastId, setSelectedPodcast]);

  if (isLoading || isLoadingPodcasDetail) {
    return (
      <div className="grid grid-cols-4 gap-4">
        <DescriptionCard
          author={author}
          imageUrl={imageUrl}
          title={title}
          description={description}
          podcastId={podcastId}
          isLoading={isLoading || isLoadingPodcasDetail}
        />
        <div className="bg-blue-400 animate-pulse col-span-3 w-full">
          <div className="bg-blue-300 animate-pulse border mb-4 p-2 w-full shadow-lg">
            <div className="bg-blue-200 animate-pulse mb-2">
              <p className="bg-blue-100 animate-pulse font-bold text-xl" />
              <p className="bg-blue-100 animate-pulse italic" />
            </div>
            <div className=" bg-blue-200 animate-pulse p-2 border-t-2" />
          </div>
          <div />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <DescriptionCard
        author={author}
        imageUrl={imageUrl}
        title={title}
        description={description}
        podcastId={podcastId}
        isLoading={isLoading || isLoadingPodcasDetail}
      />
      <div className="col-span-3 w-full">
        <div className="border mb-4 p-2 w-full shadow-lg">
          <div className="mb-2">
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="italic">{episode?.description}</p>
          </div>
          <div className="p-2 border-t-2">
            {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
            <audio
              controls
              className="block w-full max-w-md mx-auto bg-gray-100 "
            >
              <source src={episode?.episodeUrl} type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}
