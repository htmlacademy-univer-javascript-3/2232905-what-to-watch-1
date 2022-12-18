import {Genre} from '../types/genre';
import {films} from '../mocks/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsByGenre} from './action';


const initialState = {
  genre: Genre.All,
  films: films,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenre, (state) => {
      switch (state.genre){
        case Genre.All:
          state.films = films;
          break;
        default:
          state.films = films.filter((film) => film.genre === state.genre);
          break;
      }
    });
});
