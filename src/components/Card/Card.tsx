import { Link } from "wouter";
import { routes } from "../../router/routes";
import useSelectedPodcastStore from "../../store/selectedPodcast";
import type { Entry } from "../../types/podcast";

interface CardProps {
  entry: Entry;
}
export function Card({ entry }: CardProps) {
  const { setSelectedPodcast } = useSelectedPodcastStore();

  const id = entry.id.attributes["im:id"];
  const author = entry["im:artist"].label;
  const imageUrl = entry["im:image"][2].label;
  const title = entry["im:name"].label;

  return (
    <Link
      href={`${routes.podcasts}/${id}`}
      className="rounded-sm mt-12 shadow-xl p-3 hover:cursor-pointer"
      onClick={() => setSelectedPodcast(entry)}
    >
      <img
        className="mx-auto -translate-y-12 items-start justify-center rounded-full w-32 h-32"
        src={imageUrl}
        alt={`${title}-logo`}
      />

      <div className="flex flex-col w-50 h-50 mt-[-30px]">
        <h1 className="uppercase text-center font-semibold">{title}</h1>
        <h2 className="text-center text-slate-600">
          Author: <span className="uppercase">{author}</span>
        </h2>
      </div>
    </Link>
  );
}
