import {createAsyncThunk} from '@reduxjs/toolkit';
import {FilmInfo, Review} from '../types/film-info';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {redirectAction} from './action';
import {AuthData} from '../types/auth-data';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/user-data';
import {APIRoute, AppRoute} from '../const';

export const getFilmsAction = createAsyncThunk<FilmInfo[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'main/getFilmsAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo[]>(`${APIRoute.Films}`);
    return data;
  },
);

export const getFavoriteFilmsAction = createAsyncThunk<FilmInfo[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite-films/getFavoriteFilmsAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo[]>(`${APIRoute.Favorite}`);
    return data;
  },
);

export const changeFilmStatusAction = createAsyncThunk<FilmInfo, {filmId: number; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite-films/changeFilmStatusAction',
  async ({filmId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<FilmInfo>(`${APIRoute.Favorite}/${filmId}/${status}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data: user} = await api.get<UserData>(APIRoute.Login);
    return user;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/loginAction',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(redirectAction(AppRoute.Main));
    return user;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logoutAction',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);


export const getFilmAction = createAsyncThunk<FilmInfo, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/getFilmAction',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo>(`${APIRoute.Films}/${filmId}`);
    return data;
  },
);

export const getSimilarFilmsAction = createAsyncThunk<FilmInfo[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/getSimilarFilmsAction',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo[]>(`${APIRoute.Films}/${filmId}/similar`);
    return data;
  },
);


export const getFilmReviewsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/getFilmReviewsAction',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
  },
);


export const postFilmReviewAction = createAsyncThunk<FilmInfo[], {filmId: number; review: { comment: string; rating: number }}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/postFilmReviewAction',
  async ({filmId, review}, {dispatch, extra: api}) => {
    const {data} = await api.post<FilmInfo[]>(`${APIRoute.Comments}/${filmId}`, { ...review });
    return data;
  },
);

export const getPromoFilmAction = createAsyncThunk<FilmInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/getPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo>(`${APIRoute.Promo}`);
    return data;
  },
);
