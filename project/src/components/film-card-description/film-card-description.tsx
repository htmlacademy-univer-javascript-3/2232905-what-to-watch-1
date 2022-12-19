import {FilmInfo} from '../../types/film-info';
import {PropsWithChildren, useState} from 'react';
import {Link} from 'react-router-dom';

type FilmCardDescriptionProps = PropsWithChildren<{
  film: FilmInfo;
  films: FilmInfo[];
}>

function FilmCardDescription({film, films, children}: FilmCardDescriptionProps){
  const filmsInListCount = films.filter((f) => f.isFavorite).length;

  const [isInList, setIsInList] = useState(film.isFavorite);
  const [count, setCount] = useState(filmsInListCount);

  const addOrRemoveFilmToList = () => {
    isInList ? setCount(count - 1) : setCount(count + 1);
    setIsInList(!isInList);
  };

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

        <button className="btn btn--list film-card__button" type="button" onClick={addOrRemoveFilmToList}>
          {
            isInList ?
              <svg viewBox="0 0 18 14" width="18" height="14">
                <use xlinkHref="#in-list"></use>
              </svg> :
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
          }
          <span>My list</span>
          <span className="film-card__count">{count}</span>
        </button>

        {children}
      </div>
    </div>
  );
}

export default FilmCardDescription;
