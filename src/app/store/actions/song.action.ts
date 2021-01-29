import {createAction, props} from '@ngrx/store';

export const likeSong = createAction('likeSong', props<{ trackId }>());
export const dislikeSong = createAction('dislikeSong', props<{ trackId }>());
export const retrieveSongs = createAction('retrieveSongs', props<{ songs }>());
export const likeAlbum = createAction('likeAlbum', props<{ albumId }>());
export const dislikeAlbum = createAction('dislikeAlbum', props<{ albumId }>());
export const retrieveAlbums = createAction('retrieveAlbums', props<{ albums }>());
export const search = createAction('searchInput', props<{ input }>());
