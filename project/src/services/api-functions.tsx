import {FilmInfo, Review} from '../types/film-info';
import {api} from '../store';
import {APIRoute} from '../constants/constants';

export const getFilm = async (filmId: number) => await api.get<FilmInfo>(`${APIRoute.Films}/${filmId}`);

export const getSimilarFilms = async (filmId: number) => await api.get<FilmInfo[]>(`${APIRoute.Films}/${filmId}/similar`);

export const getFilmReviews = async (filmId: number) => await api.get<Review[]>(`${APIRoute.Comments}/${filmId}`);

export const postFilmReview = async (filmId: number, review: { comment: string; rating: number }) => await api.post<FilmInfo[]>(`${APIRoute.Comments}/${filmId}`, { ...review });
