import { Route, Switch } from "wouter";
import { EpisodeDetail } from "../pages/episode/detail";
import { Podcasts } from "../pages/podcasts/all";
import { PodcastDetail } from "../pages/podcasts/detail";
import { routes } from "./routes";

export function Router() {
  return (
    <Switch>
      <Route path={routes.home} component={Podcasts} />
      <Route path={`${routes.podcasts}/:podcastId`}>
        {(params) => <PodcastDetail id={params.podcastId} />}
      </Route>
      <Route path={`${routes.podcasts}/:podcastId/episode/:episodeId`}>
        {(params) => (
          <EpisodeDetail
            podcastId={params.podcastId}
            episodeId={params.episodeId}
          />
        )}
      </Route>
    </Switch>
  );
}
