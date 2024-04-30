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
  term: FluffyLabel;
  label: FluffyLabel;
}

export type FluffyLabel = "Podcast";

export interface IMImage {
  label: string;
  attributes: IMImageAttributes;
}

export interface IMImageAttributes {
  height: string;
}

export interface IMPrice {
  label: IMPriceLabel;
  attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
  amount: string;
  currency: Currency;
}

export type Currency = "USD";

export type IMPriceLabel = "Get";

export interface IMReleaseDate {
  label: Date;
  attributes: Label;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: Rel;
  type?: Type;
  href: string;
}

export type Rel = "alternate" | "self";

export type Type = "text/html";
