import {createSelector} from '@ngrx/store';
import {AppState} from '../app.state';

export const selectSongs = createSelector(
  (state: AppState) => state.songs,
  (songs: any[]) => songs
);

export const selectSearch = createSelector(
  (state: AppState) => state.searchInput,
  (searchInput: string) => searchInput
);
