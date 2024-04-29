import { Podcasts } from "../../types/podcast";

export const getAllPodcasts = async (): Promise<Podcasts> => {
  const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
  const data = await response.json();
  return data;
};