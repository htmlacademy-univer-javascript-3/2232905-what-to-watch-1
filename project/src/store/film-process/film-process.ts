import {NameSpace} from "../../const";
import {createSlice} from "@reduxjs/toolkit";
import {
  getFilmAction, getFilmReviewsAction,
  getSimilarFilmsAction, postFilmReviewAction,
} from "../api-actions";
import {FilmInfo, Review} from "../../types/film-info";
import {getFilm} from "./selectors";


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
}


export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
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
      //.addCase(setFavoriteFilmAction.fulfilled, (state, action) => {
      //  state.film = action.payload;
      //})
  }
});
