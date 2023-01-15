import {State} from "../../types/state";
import {FilmInfo} from "../../types/film-info";
import {NameSpace} from "../../const";

export const getFavoriteFilms = (state: State): FilmInfo[] =>
  Object
    .keys(state[NameSpace.FavoriteFilms].favoriteFilms)
    .map((key) => state[NameSpace.FavoriteFilms].favoriteFilms[Number(key)]);

export const getFavoriteFilmsCount = (state: State): number => Object.keys(state[NameSpace.FavoriteFilms].favoriteFilms).length;
