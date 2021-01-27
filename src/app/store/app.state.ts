import {Song} from '../models/song.model';

export interface AppState {
  songs: ReadonlyArray<Song>;
}
