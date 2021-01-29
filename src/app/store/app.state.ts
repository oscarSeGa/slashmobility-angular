import {Song} from '../models/song.model';

export interface AppState {
  songs: ReadonlyArray<number>;
  albums: ReadonlyArray<number>;
  searchInput: string;
}
