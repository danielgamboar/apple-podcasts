export interface Podcasts {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: Label;
  rights: Label;
  title: Label;
  icon: Label;
  link: Link[];
  id: Label;
}

export interface Author {
  name: Label;
  uri: Label;
}

export interface Label {
  label: string;
}

export interface Entry {
  "im:name": Label;
  "im:image": IMImage[];
  summary: Label;
  "im:price": IMPrice;
  "im:contentType": IMContentType;
  rights?: Label;
  title: Label;
  link: Link;
  id: ID;
  "im:artist": IMArtist;
  category: Category;
  "im:releaseDate": IMReleaseDate;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  "im:id": string;
  term: PurpleLabel;
  scheme: string;
  label: PurpleLabel;
}

export type PurpleLabel =
  | "Music"
  | "Music Commentary"
  | "Music History"
  | "Music Interviews";

export interface ID {
  label: string;
  attributes: IDAttributes;
}

export interface IDAttributes {
  "im:id": string;
}

export interface IMArtist {
  label: string;
  attributes?: IMArtistAttributes;
}

export interface IMArtistAttributes {
  href: string;
}

export interface IMContentType {
  attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
  term: string;
  label: string;
}

export interface IMImage {
  label: string;
  attributes: IMImageAttributes;
}

export interface IMImageAttributes {
  height: string;
}

export interface IMPrice {
  label: string;
  attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
  amount: string;
  currency: string;
}

export interface IMReleaseDate {
  label: Date;
  attributes: Label;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: string;
  type?: string;
  href: string;
}

export interface PodcastDetail {
  resultCount: number;
  results: Result[];
}

export interface Result {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Array<GenreClass | string>;
  episodeUrl?: string;
  artistIds?: number[];
  previewUrl?: string;
  closedCaptioning?: string;
  shortDescription?: string;
  episodeGuid?: string;
  description?: string;
  artworkUrl160?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
}

export interface GenreClass {
  name: string;
  id: string;
}
