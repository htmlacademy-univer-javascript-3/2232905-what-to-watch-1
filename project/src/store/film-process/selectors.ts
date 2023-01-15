import {State} from '../../types/state';
import {FilmInfo, Review} from '../../types/film-info';
import {NameSpace} from '../../const';

export const getFilm = (state: State): FilmInfo | null => state[NameSpace.Film].film;
export const getSimilarFilm = (state: State): FilmInfo[] => state[NameSpace.Film].similarFilms;
export const getReviews = (state: State): Review[] => state[NameSpace.Film].reviews;
export const getIsReviewSend = (state: State): boolean | null => state[NameSpace.Film].isReviewSend;
export const getIsFilmLoaded = (state: State): boolean => state[NameSpace.Film].isFilmLoaded;
