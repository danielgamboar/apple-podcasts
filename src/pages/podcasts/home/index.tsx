import { useGetPodcasts } from "../../../hooks/podcasts/useGetAllPodcasts"


export default function Podcasts () {
  const { feed, isLoading } = useGetPodcasts()
  
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {
        feed?.entry.map(ent=>(
          <div className="flex m-2 border" key={ent.id.attributes["im:id"]}>
            <h1>Title: {ent.title.label}</h1>
            <p>Summary: {ent.summary.label}</p>
          </div>
        ))
      }
    </div>
  )
}