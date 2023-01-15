import {createAction} from '@reduxjs/toolkit';


export const changeGenreAction = createAction('data/changeGenre', (genre: string) => ({
  payload: genre,
}));
export const redirectAction = createAction('redirect', (path: string) => ({
  payload: path,
}));
