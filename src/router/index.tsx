import { Route, Switch } from "wouter";
import Podcasts from "../pages/podcasts/home";
import PodcastDetail from "../pages/podcasts/detail";
import { routes } from "./routes";

export default function Router () {
  return (
    <Switch>
      <Route path={routes.home} component={Podcasts} />
      <Route path={routes.podcasts.detail}>
        {params => <PodcastDetail id={params.podcastId} />}
      </Route>
    </Switch>
  )
}