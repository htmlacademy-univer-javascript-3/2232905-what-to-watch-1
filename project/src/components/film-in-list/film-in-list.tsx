import {FilmInfo} from '../../types/film-info';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilmsCount} from '../../store/favorite-films-process/selectors';
import {changeFilmStatusAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import {redirectAction} from '../../store/action';

function FilmInList({film}: {film: FilmInfo}) : JSX.Element {
  const dispatch = useAppDispatch();
  const countFavoriteFilms = useAppSelector(getFavoriteFilmsCount);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() => {
        if (authorizationStatus !== AuthorizationStatus.Auth) {
          dispatch(redirectAction(AppRoute.Login));
        }
        else {
          dispatch(changeFilmStatusAction({filmId: film.id, status: Number(!film.isFavorite)}));
        }
      }}
    >
      {
        film.isFavorite ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }
      <span>My list</span>
      <span className="film-card__count">{countFavoriteFilms}</span>
    </button>
  );
}

export default FilmInList;
