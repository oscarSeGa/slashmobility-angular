import {createReducer, on} from '@ngrx/store';
import {dislikeSong, likeSong, retrieveSongs, search} from '../actions/song.action';

const initialList: string[] = [];
const initialSearch = '';

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

export const searchReducer = createReducer(
  initialSearch,
  on(search, (state, {input}) => {
    console.info('reducer', input);
    return input;
  })
);

