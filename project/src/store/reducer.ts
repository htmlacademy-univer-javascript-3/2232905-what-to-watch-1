import {Genre} from '../types/genre';
import {FilmInfo} from '../types/film-info';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenreAction,
  redirectAction,
  setFilmsAction,
  setGenresAction,
  setIsFilmsLoadedAction,
  setPromoFilmAction
} from './action';
import browserHistory from '../browser-history';


const initialState: {
  selectedGenre: string;
  films: FilmInfo[];
  promoFilm: FilmInfo | null;
  genres: string[];
  isFilmsLoaded: boolean;
} = {
  selectedGenre: Genre.All,
  films: [],
  promoFilm: null,
  genres: ['All Genres'],
  isFilmsLoaded: false,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(setGenresAction, (state) => {
      const genres = new Set<string>(['All Genres']);
      for (const film of state.films){
        genres.add(film.genre);
      }
      state.genres = Array.from(genres);
    })
    .addCase(setFilmsAction, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setPromoFilmAction, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setIsFilmsLoadedAction, (state, action) => {
      state.isFilmsLoaded = action.payload;
    })
    .addCase(redirectAction, (state, action) => {
      browserHistory.push(action.payload);
    });
});
