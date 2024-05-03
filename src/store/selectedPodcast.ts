import { create } from "zustand";
import type { Entry } from "../types/podcast";

type SelectedPodcastState = {
  selectedPodcast: Entry | null;
  setSelectedPodcast: (podcast: Entry | undefined) => void;
};

const useSelectedPodcastStore = create<SelectedPodcastState>()((set) => ({
  selectedPodcast: null,
  setSelectedPodcast: (podcast: Entry | undefined) =>
    set({ selectedPodcast: podcast }),
}));

export default useSelectedPodcastStore;
