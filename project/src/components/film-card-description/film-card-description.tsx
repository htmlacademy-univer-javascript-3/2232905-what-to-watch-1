import {FilmInfo} from '../../types/film-info';
import {PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';
import FilmInList from '../film-in-list/film-in-list';

type FilmCardDescriptionProps = PropsWithChildren<{
  film: FilmInfo;
}>

function FilmCardDescription({film, children}: FilmCardDescriptionProps){
  return(
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>

      <div className="film-card__buttons">
        <Link to={`/player/${film.id}`} className="btn btn--play film-card__button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>
        <FilmInList film={film}/>
        {children}
      </div>
    </div>
  );
}

export default FilmCardDescription;
