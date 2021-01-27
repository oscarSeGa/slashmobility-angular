import {createSelector} from '@ngrx/store';
import { Song } from 'src/app/models/song.model';
import {AppState} from '../app.state';

export const selectSongs = createSelector(
  (state: AppState) => state.songs,
  (songs: Song[]) => songs
);
