import {createAction, props} from '@ngrx/store';

export const likeSong = createAction('likeSong', props<{ trackId: number }>());
export const dislikeSong = createAction('dislikeSong', props<{ trackId: number }>());
export const retrieveSongs = createAction('retrieveSongs', props<{ songs }>());
