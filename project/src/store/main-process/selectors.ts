import {NameSpace} from '../../const';
import {FilmInfo} from '../../types/film-info';
import {State} from '../../types/state';

export const getError = (state: State): string|null => state[NameSpace.Main].error;
export const getFilms = (state: State): FilmInfo[] => state[NameSpace.Main].films;
export const getPromoFilm = (state: State): FilmInfo|null => state[NameSpace.Main].promoFilm;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Main].isDataLoaded;
export const getSelectedGenre = (state: State): string => state[NameSpace.Main].selectedGenre;
