import {FilmInfo} from '../../types/film-info';
import {Genre} from '../../types/genre';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {getFilmsAction, getPromoFilmAction} from '../api-actions';
import {changeGenreAction} from '../action';

const initialState: {
  films: FilmInfo[];
  selectedGenre: string;
  promoFilm: FilmInfo | null;
  error: null;
  isDataLoaded: boolean;
  favoriteFilms: FilmInfo[];

} = {
  films: [],
  selectedGenre: Genre.All,
  promoFilm: null,
  error: null,
  isDataLoaded: false,
  favoriteFilms: []
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
      });
    // .addCase(getFavoriteFilmsAction.fulfilled, (state, action) => {
    //   state.favoriteFilms = action.payload;
    // });
  }
});
