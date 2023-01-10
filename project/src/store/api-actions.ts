import {createAsyncThunk} from '@reduxjs/toolkit';
import {FilmInfo} from '../types/film-info';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {
  redirectAction,
  requireAuthorization,
  setFilmsAction,
  setGenresAction,
  setPromoFilmAction,
  setUserAction
} from './action';
import {APIRoute, AppRoute, AuthStatus} from '../constants/constants';
import {AuthData} from '../types/auth-data';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/user-data';

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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: user} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthStatus.Auth));
      dispatch(setUserAction(user));
    }
    catch {
      dispatch(requireAuthorization(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(requireAuthorization(AuthStatus.Auth));
    dispatch(setUserAction(user));
    dispatch(redirectAction(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dispatch(requireAuthorization(AuthStatus.NoAuth));
    dispatch(setUserAction(null));
    dropToken();
  },
);
