import {createAsyncThunk} from '@reduxjs/toolkit';
import {FilmInfo} from '../types/film-info';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {setFilmsAction, setGenresAction, setPromoFilmAction} from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo[]>('/films');
    dispatch(setFilmsAction(data));
    dispatch(setGenresAction());
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo>('/promo');
    dispatch(setPromoFilmAction(data));
  },
);
