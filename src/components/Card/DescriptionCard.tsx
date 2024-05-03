import DOMPurify from "dompurify";
import { Link } from "wouter";
import { routes } from "../../router/routes";

interface PodcastDetailProps {
  imageUrl: string;
  title: string;
  author: string;
  description: string;
  podcastId: string;
  isLoading: boolean;
}

export function DescriptionCard({
  imageUrl,
  title,
  author,
  description,
  podcastId,
  isLoading,
}: PodcastDetailProps) {
  if (isLoading) {
    return (
      <section className="bg-blue-300 animate-pulse border shadow-lg rounded-lg p-3">
        <p className="bg-blue-200 animate-pulse mx-auto items-start justify-center w-40 h-40 rounded-lg mb-2 " />
        <div className="bg-blue-200 animate-pulse border-y-2 p-2">
          <p className="bg-blue-100 animate-pulse font-semibold text-xl" />
          <p className="bg-blue-100 animate-pulse italic" />
        </div>
        <div className="bg-blue-200 animate-pulse p-2">
          <p className="bg-blue-100 animate-pulse font-semibold text-xl" />
          <p className="bg-blue-100 animate-pulse italic" />
        </div>
      </section>
    );
  }

  const sanitizedDescription = () => ({
    __html: DOMPurify.sanitize(description),
  });

  return (
    <section className="border shadow-lg rounded-lg p-3">
      <Link href={`${routes.podcasts}/${podcastId}`}>
        <img
          className="mx-auto items-start justify-center w-40 h-40 rounded-lg mb-2"
          src={imageUrl}
          alt={`${title}-logo`}
        />
      </Link>
      <div className="border-y-2 p-2">
        <h2 className="font-semibold text-xl">{title}</h2>
        <Link className="italic" href={`${routes.podcasts}/${podcastId}`}>
          {" "}
          by {author}
        </Link>
      </div>
      <div className=" p-2">
        <p className="font-semibold text-xl">Description:</p>
        <div
          className="italic"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={sanitizedDescription()}
        />
      </div>
    </section>
  );
}
