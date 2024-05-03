import type { PodcastDetail, Podcasts } from "../../types/podcast";

export const getAllPodcasts = async (): Promise<Podcasts> => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
  );
  const data = await response.json();
  return data;
};

export const getPodcastById = async (id: string): Promise<PodcastDetail> => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
    )}`,
  );

  const data = await response.json();
  return JSON.parse(data.contents);
};
