import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import {Link, useParams} from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import LoadingScreen from '../../components/loading/loading';
import {getFilmsAction} from "../../store/api-actions";
import {getFilm} from "../../store/film-process/selectors";


function AddReview(): JSX.Element {
  const params = useParams();
  const filmId = Number(params.id);
  const film = useAppSelector(getFilm)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFilmsAction)
  },
  [filmId, dispatch]);

  return !film ? <LoadingScreen/> : (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardBackground background={film.backgroundImage} alt={film.name}></FilmCardBackground>

        <Header className=''>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film.id}/review`}>Add review</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <AddReviewForm/>

    </section>
  );
}

export default AddReview;
