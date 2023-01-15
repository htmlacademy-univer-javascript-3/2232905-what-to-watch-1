import {FilmInfo} from '../../types/film-info';
import {Genre} from '../../types/genre';
import {createSlice} from '@reduxjs/toolkit';
import {FILMS_COUNT_STEP, NameSpace} from '../../const';
import {
  changeFilmStatusAction,
  getFilmsAction,
  getPromoFilmAction,
  logoutAction
} from '../api-actions';

const initialState: {
  films: FilmInfo[];
  filmsCountToShow: number;
  selectedGenre: string;
  promoFilm: FilmInfo | null;
  error: null;
  isDataLoaded: boolean;

} = {
  films: [],
  filmsCountToShow: FILMS_COUNT_STEP,
  selectedGenre: Genre.All,
  promoFilm: null,
  error: null,
  isDataLoaded: false,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeGenreAction(state, action: {payload: string; type: string}) {
      state.selectedGenre = action.payload;
      state.filmsCountToShow = FILMS_COUNT_STEP;
    },
    changeFilmsCountToShowAction(state, action: {payload: number; type: string}) {
      state.filmsCountToShow = action.payload;
    }
  },
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

export const {changeGenreAction, changeFilmsCountToShowAction} = mainProcess.actions;
