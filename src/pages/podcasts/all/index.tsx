import { useEffect, useState } from "react";
import { Card } from "../../../components/Card/Card";
import { useGetPodcasts } from "../../../hooks/podcasts/useGetAllPodcasts";
import useLoadingProvider from "../../../hooks/useLoadingProvider";
export function Podcasts() {
  const { feed, isLoading } = useGetPodcasts();
  const { handleLoadingApp } = useLoadingProvider();
  const [filterKey, setFilterKey] = useState("");

  const entries =
    feed?.entry.filter(
      (ent) =>
        ent["im:name"].label.toLowerCase().includes(filterKey.toLowerCase()) ||
        ent["im:artist"].label.toLowerCase().includes(filterKey.toLowerCase()),
    ) ?? feed?.entry;

  const handleFilterKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterKey(e.target.value);
  };

  useEffect(() => {
    handleLoadingApp(isLoading);
  }, [isLoading, handleLoadingApp]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-y-32 gap-x-10">
        {Array(4)?.map((e) => (
          <div
            key={e + 1}
            className="bg-blue-100 animate-pulse rounded-sm mt-12 shadow-xl p-3 hover:cursor-pointer"
          >
            <p className="bg-blue-400 animate-pulse mx-auto -translate-y-12 items-start justify-center rounded-full w-32 h-32" />

            <div className="bg-blue-300 animate-pulse flex flex-col w-50 h-50 mt-[-30px]">
              <p className="bg-blue-200 animate-pulse uppercase text-center font-semibold" />
              <p className="bg-blue-200 animate-pulse text-center text-slate-600" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-4">
        <p className="bg-blue-500 text-white rounded-lg px-1 font-semibold">
          {entries?.length}
        </p>
        <input
          placeholder="Filter podcasts..."
          onChange={handleFilterKeyChange}
          className="mx-2 px-1 border rounded-sm"
        />
      </div>
      <div className="grid grid-cols-4 gap-y-32 gap-x-10">
        {entries?.map((ent) => (
          <Card entry={ent} key={ent.id.attributes["im:id"]} />
        ))}
      </div>
    </div>
  );
}
