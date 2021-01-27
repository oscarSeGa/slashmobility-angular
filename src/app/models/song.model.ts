import { Deserializable } from '../interfaces/deserializable.interface';

export class Song implements Deserializable {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl130: string;
  artworkUrl160: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: string;
  liked: boolean;

  deserialize(input: any): any {
    Object.assign(this, input);
    return this;
  }

  constructor(obj?: any) {
    this.deserialize(obj);
  }

}
