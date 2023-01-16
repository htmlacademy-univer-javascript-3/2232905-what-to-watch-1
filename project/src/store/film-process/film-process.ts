import {NameSpace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {
  changeFilmStatusAction,
  getFilmAction, getFilmReviewsAction,
  getSimilarFilmsAction,
  postFilmReviewAction,
} from '../api-actions';
import {FilmInfo, Review} from '../../types/film-info';


const initialState: {
  film: FilmInfo | null;
  similarFilms: FilmInfo[];
  isFilmLoaded: boolean;
  reviews: Review[];
  isReviewSend: boolean | null;
} = {
  film: null,
  similarFilms: [],
  isFilmLoaded: false,
  reviews: [],
  isReviewSend: null,
};


export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    changeIsReviewSend(state, action: {payload: boolean | null; type: string}){
      state.isReviewSend = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoaded = true;
      })
      .addCase(getFilmAction.pending, (state, action) => {
        state.isFilmLoaded = false;
      })
      .addCase(getFilmAction.rejected, (state, action) => {
        state.isFilmLoaded = true;
      })
      .addCase(getSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(getFilmReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postFilmReviewAction.fulfilled, (state, action) => {
        state.isReviewSend = true;
      })
      .addCase(postFilmReviewAction.pending, (state, action) => {
        state.isReviewSend = false;
      })
      .addCase(postFilmReviewAction.rejected, (state, action) => {
        state.isReviewSend = null;
      })
      .addCase(changeFilmStatusAction.fulfilled, (state, action) => {
        const film = action.payload;
        if (state.film?.id === film.id)
        {state.film.isFavorite = film.isFavorite;}
      });
  }
});

export const {changeIsReviewSend} = filmProcess.actions;
