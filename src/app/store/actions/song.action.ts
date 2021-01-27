import {createAction, props} from '@ngrx/store';

export const likeSong = createAction('likeSong', props<{ trackId }>());
export const dislikeSong = createAction('dislikeSong', props<{ trackId }>());
export const retrieveSongs = createAction('retrieveSongs', props<{ songs }>());
