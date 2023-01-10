import {createAction} from '@reduxjs/toolkit';
import {FilmInfo} from '../types/film-info';
import {AuthStatus} from '../constants/constants';
import {UserData} from '../types/user-data';


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
export const setUserAction = createAction('data/setUser', (user: UserData | null) => ({
  payload: user,
}));
export const redirectAction = createAction('redirect', (path: string) => ({
  payload: path,
}));
export const requireAuthorization = createAction('user/requireAuthorization', (authStatus: AuthStatus) => ({
  payload: authStatus,
}));
