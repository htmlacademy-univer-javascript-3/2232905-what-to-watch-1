import {FilmInfo} from '../../types/film-info';

function FilmReviews({filmInfo}: {filmInfo: FilmInfo}) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          filmInfo.reviews.map((review) => (
            <div className="review" key={review.id}>
              <blockquote className="review__quote">
                <p className="review__text">{review.text}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.author}</cite>
                  <time className="review__date" dateTime={review.dateTimeNumeric}>{review.published}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating.toString()}</div>
            </div>))
        }
      </div>
    </div>
  );
}

export default FilmReviews;
