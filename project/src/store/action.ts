import {createAction} from '@reduxjs/toolkit';
import {FilmInfo} from '../types/film-info';


export const changeGenreAction = createAction('data/changeGenre', (genre: string) => ({
  payload: genre,
}));
export const setGenresAction = createAction('data/setGenres');
export const setFilmsAction = createAction('data/setFilms', (films: FilmInfo[]) => ({
  payload: films,
}));
export const setPromoFilmAction = createAction('data/setPromoFilm', (promoFilm: FilmInfo) => ({
  payload: promoFilm,
}));
export const setIsFilmsLoadedAction = createAction('data/setIsFilmsLoaded', (isLoaded: boolean) => ({
  payload: isLoaded,
}));
export const redirectAction = createAction('redirect', (path: string) => ({
  payload: path,
}));
