import React, {useState} from 'react';
import {postFilmReview} from '../../services/api-functions';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {redirectAction} from '../../store/action';

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

  const onChangeReview = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    if (value.length >= 50 && value.length <= 400)
    {setIsCommentValid(true);}
    else
    {setIsCommentValid(false);}

    setFormData({...formData, [name]: value});
  };

  const onChangeRating = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setIsRatingValid(true);
    setFormData({...formData, [name]: value});
  };

  const onSubmitPost = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    postFilmReview(filmId, formData).then(() => {
      dispatch(redirectAction(`/films/${filmId}`));
    }
    );
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onSubmitPost}>
        <div className="rating">
          <div className="rating__stars">
            {
              Array.from({length: 10}, (_, i) => i + 1).reverse().map((ratingValue) => (
                <>
                  <input className="rating__input"
                    id={`star-${ratingValue.toString()}`}
                    type="radio"
                    name="rating"
                    value={ratingValue.toString()}
                    onChange={onChangeRating}
                  />
                  <label className="rating__label" htmlFor={`star-${ratingValue.toString()}`}>{`Rating ${ratingValue.toString()}`}</label>
                </>))
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
            onChange={onChangeReview}
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
