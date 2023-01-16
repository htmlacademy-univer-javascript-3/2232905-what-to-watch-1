import React, {Fragment, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {redirectAction} from '../../store/action';
import {postFilmReviewAction} from '../../store/api-actions';
import {getIsReviewSend} from '../../store/film-process/selectors';
import LoadingScreen from '../loading/loading';
import {AppRoute} from '../../const';
import {changeIsReviewSend} from '../../store/film-process/film-process';

function AddReviewForm() {
  const [formData, setFormData] = useState({
    rating: -1,
    comment: ''
  });
  const [isCommentValid, setIsCommentValid] = useState(false);
  const [isRatingValid, setIsRatingValid] = useState(false);
  const dispatch = useAppDispatch();
  const params = useParams();
  const filmId = Number(params.id);
  const isReviewSend = useAppSelector(getIsReviewSend);

  const handleTextAreaChangeComment = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    if (value.length >= 50 && value.length <= 400)
    {setIsCommentValid(true);}
    else
    {setIsCommentValid(false);}

    setFormData({...formData, [name]: value});
  };

  const handleInputChangeRating = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setIsRatingValid(true);
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postFilmReviewAction({filmId: filmId, review: formData}));
  };

  if (isReviewSend)
  {
    dispatch(redirectAction(`${AppRoute.Films}/${filmId}`));
    dispatch(changeIsReviewSend(null));
  }

  return (isReviewSend === false) ? (<LoadingScreen/>) : (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              Array.from({length: 10}, (_, i) => i + 1).reverse().map((ratingValue) => (
                <Fragment key={`star-${ratingValue.toString()}`}>
                  <input className="rating__input"
                    id={`star-${ratingValue.toString()}`}
                    type="radio"
                    name="rating"
                    value={ratingValue.toString()}
                    onChange={handleInputChangeRating}
                  />
                  <label className="rating__label" htmlFor={`star-${ratingValue.toString()}`}>{`Rating ${ratingValue.toString()}`}</label>
                </Fragment>))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea"
            name="comment"
            id="comment"
            placeholder="Comment"
            minLength={50}
            maxLength={400}
            onChange={handleTextAreaChangeComment}
          >
          </textarea>
          <div className="add-review__submit">
            <button disabled={!isCommentValid || !isRatingValid} className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
