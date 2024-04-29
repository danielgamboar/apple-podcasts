

interface PodcastDetailProps {
  id: string;
}

export default function PodcastDetail ({id}: PodcastDetailProps) {
  return (
    <h1>Podcast Detail: {id}</h1>
  )
}