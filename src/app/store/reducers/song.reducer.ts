import {createReducer, on} from '@ngrx/store';
import {dislikeAlbum, dislikeSong, likeAlbum, likeSong, retrieveAlbums, retrieveSongs, search} from '../actions/song.action';

const initialList: number[] = [];
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

export const albumReducer = createReducer(
  initialList,
  on(likeAlbum, (state, {albumId}) => {
    if (state.includes(albumId)) {
      return state;
    }
    return [...state, albumId];
  }),
  on(dislikeAlbum, (state, {albumId}) => {
    return state.filter(id => albumId !== id);
  }),
  on(retrieveAlbums, (state, {albums}) => {
    return [...albums];
  })
);

export const searchReducer = createReducer(
  initialSearch,
  on(search, (state, {input}) => {
    return input;
  })
);

