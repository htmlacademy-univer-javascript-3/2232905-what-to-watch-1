import {FilmInfo} from '../../types/film-info';
import {Genre} from '../../types/genre';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {
  changeFilmStatusAction,
  getFilmsAction,
  getPromoFilmAction,
  logoutAction
} from '../api-actions';
import {changeGenreAction} from '../action';

const initialState: {
  films: FilmInfo[];
  selectedGenre: string;
  promoFilm: FilmInfo | null;
  error: null;
  isDataLoaded: boolean;

} = {
  films: [],
  selectedGenre: Genre.All,
  promoFilm: null,
  error: null,
  isDataLoaded: false,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFilmsAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(getFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(getPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(changeGenreAction, (state, action) => {
        state.selectedGenre = action.payload;
      })
      .addCase(changeFilmStatusAction.fulfilled, (state, action) => {
        const film = action.payload;
        if (state.promoFilm?.id === film.id)
        {state.promoFilm.isFavorite = film.isFavorite;}
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        if (state.promoFilm) {
          state.promoFilm.isFavorite = false;
        }
      });
  }
});
