import {createReducer, on} from '@ngrx/store';
import {dislikeSong, likeSong, retrieveSongs} from '../actions/song.action';

const initialList: string[] = [];

export const songReducer = createReducer(
  initialList,
  on(likeSong, (state, {trackId}) => {
    if (state.includes(trackId)) {
      return state;
    }
    return [...state, trackId];
  }),
  on(dislikeSong, (state, {trackId}) => {
    return state.filter(id => trackId !== id);
  }),
  on(retrieveSongs, (state, {songs}) => {
    return [...songs];
  })
);

