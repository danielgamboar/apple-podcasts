import Card from "../../../components/Card";
import { useGetPodcasts } from "../../../hooks/podcasts/useGetAllPodcasts";

export default function Podcasts() {
  const { feed, isLoading } = useGetPodcasts();

  console.log("feed", feed);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-y-32 gap-x-10">
      {feed?.entry.map((ent) => (
        <Card
          id={ent.id.attributes["im:id"]}
          author={ent["im:artist"].label}
          imageUrl={ent["im:image"][2].label}
          title={ent["im:name"].label}
          key={ent.id.attributes["im:id"]}
        />
      ))}
    </div>
  );
}
