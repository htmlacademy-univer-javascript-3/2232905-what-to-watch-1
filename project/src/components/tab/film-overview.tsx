import {FilmInfo} from '../../types/film-info';

function FilmOverview({filmInfo}: {filmInfo: FilmInfo}){
  const getScore = () => {
    if (0 <= filmInfo.rating && filmInfo.rating < 3){
      return 'Bad';
    } else if (3 <= filmInfo.rating && filmInfo.rating < 5){
      return 'Normal';
    } else if (5 <= filmInfo.rating && filmInfo.rating < 8){
      return 'Good';
    } else if (8 <= filmInfo.rating && filmInfo.rating < 10){
      return 'Very good';
    } else {
      return 'Awesome';
    }
  };

  return (
    <>
      <div className="film-rating">
        {
          filmInfo.rating ?
            <>
              <div className="film-rating__score">{filmInfo.rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{getScore()}</span>
                <span className="film-rating__count">{`${filmInfo.scoresCount} ${filmInfo.scoresCount === 1 ? 'rating' : 'ratings'}`}</span>
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
        <p className="film-card__starring"><strong>Starring: {filmInfo.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
