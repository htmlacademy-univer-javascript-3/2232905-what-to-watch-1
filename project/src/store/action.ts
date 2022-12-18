import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre';


export const changeGenre = createAction('changeGenre', (genre: Genre) => ({
  payload: genre,
}));
export const getFilmsByGenre = createAction('getFilmsByGenre');
