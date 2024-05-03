# Apple Podcasts!

#### Developed by: Daniel Gamboa

This is an app to see a list of the 100 most popular podcasts
You can access a preview [here](https://apple-podcasts.vercel.app/) (deployed in Vercel)
React and this library:
| NPM package | Description |
| ------ | ------ |
| Tanstack Query | For HTTP handling and caching |
| Wouter | Used for the routing of the app |
| Zustand | To handle the global state of the app |
| Vite | As frontend tooling |
| Tailwind | As CSS library |

## Installation

This app requires [Node.js](https://nodejs.org/) v20+ to run.
It can be tested with [Bun](https://bun.sh/) as well.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/danielgamboar/apple-podcasts.git
cd apple-podcast
`npm install` or `yarn` or `bun install`
`npm run dev` for dev mode
`[npm|yarn|bun] build && [npm|yarn|bun] start` for production mode 
```

## Frontend routes

| Route     | Description                                                                           |
| ---------                               | -------------------------------------------------       |
| /                                       | This is the home page. Will display the list of podcasts|
| /podcasts/:podcastId                    | To access the details of the selected podcast           |
| /podcasts/:podcastId/episode/:episodeId | To access the details of the selected episode           |
