import FilmNav from './film-nav';
import {FilmInfo} from '../../types/film-info';
import {FilmPageContentType} from './film';

function FilmOverview({filmInfo}: {filmInfo: FilmInfo}){

  const showStarringActors = () => filmInfo.starring.join(', ');

  return (
    <div className="film-card__desc">
      <FilmNav activeItem={FilmPageContentType.Overview} filmId={filmInfo.id}/>

      <div className="film-rating">
        {
          filmInfo.rating ?
            <>
              <div className="film-rating__score">{filmInfo.rating.score}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{filmInfo.rating.level}</span>
                <span className="film-rating__count">{`${filmInfo.rating.count} ${filmInfo.rating.count === 1 ? 'rating' : 'ratings'}`}</span>
              </p>
            </> :
            <p className="film-rating__meta">
              <span className="film-rating__level">Нет информации о рейтинге</span>
            </p>
        }

      </div>

      <div className="film-card__text">
        <p>{filmInfo.description}</p>
        <p className="film-card__director"><strong>Director: {filmInfo.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {showStarringActors()} and other</strong></p>
      </div>
    </div>);
}

export default FilmOverview;
