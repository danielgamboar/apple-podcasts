import { useState } from "react";
import Card from "../../../components/Card";
import { useGetPodcasts } from "../../../hooks/podcasts/useGetAllPodcasts";
export default function Podcasts() {
  const { feed, isLoading } = useGetPodcasts();
  const [filterKey, setFilterKey] = useState("");

  const entries = feed?.entry.filter((ent) => ent["im:name"].label.toLowerCase().includes(filterKey.toLowerCase()) || ent["im:artist"].label.toLowerCase().includes(filterKey.toLowerCase())) ?? feed?.entry;

  const handleFilterKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterKey(e.target.value)
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col">
    <div className="flex justify-end mb-4">
      <p className="bg-blue-500 text-white rounded-lg px-1 font-semibold">{feed?.entry.length}</p>
      <input placeholder="Filter podcasts..." onChange={handleFilterKeyChange} className="mx-2 px-1 border rounded-sm"/>
    </div>
    <div className="grid grid-cols-4 gap-y-32 gap-x-10">
      {entries?.map((ent) => (
        <Card
          id={ent.id.attributes["im:id"]}
          author={ent["im:artist"].label}
          imageUrl={ent["im:image"][2].label}
          title={ent["im:name"].label}
          key={ent.id.attributes["im:id"]}
        />
      ))}
    </div>
    </div>
  );
}
