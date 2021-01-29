import {Deserializable} from '../interfaces/deserializable.interface';

export class Album implements Deserializable {
  wrapperType: string;
  collectionType: string;
  artistId: number;
  collectionId: number;
  amgArtistId: number;
  artistName: string;
  collectionName: string;
  trackId: number;
  trackName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  collectionExplicitness: string;
  trackCount: number;
  copyright: string;
  country: string;
  currency: string;
  releaseDate: string;
  primaryGenreName: string;

  deserialize(input: any): any {
    Object.assign(this, input);
    return this;
  }

  constructor(obj?: any) {
    this.deserialize(obj);
  }
}
