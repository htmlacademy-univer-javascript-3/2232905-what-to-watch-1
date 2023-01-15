import {FilmInfo} from '../../types/film-info';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {changeFilmStatusAction, getFavoriteFilmsAction, logoutAction} from '../api-actions';


const initialState: {
  favoriteFilms: {[id: number]: FilmInfo};
} = {
  favoriteFilms: {},
};

export const favoriteFilmsProcess = createSlice({
  name: NameSpace.FavoriteFilms,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(getFavoriteFilmsAction.fulfilled, (state, action) => {
        action.payload.forEach((film) => {
          state.favoriteFilms[film.id] = film;
        });
      })
      .addCase(changeFilmStatusAction.fulfilled, (state, action) => {
        const film = action.payload;
        if (film.isFavorite) {
          state.favoriteFilms[film.id] = film;
        }
        else {
          delete state.favoriteFilms[film.id];
        }
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.favoriteFilms = {};
      });
  }
});

