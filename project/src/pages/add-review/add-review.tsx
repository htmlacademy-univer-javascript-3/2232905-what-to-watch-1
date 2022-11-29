import {FilmInfo} from '../../types/film-info';
import {useFilm} from '../../hooks/use-film';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import {Link, Navigate} from 'react-router-dom';
import {AuthStatus} from '../../types/auth-status';
import AddReviewForm from '../../components/add-review-form/add-review-form';

type AddReviewProps = {
  films: FilmInfo[];
  isAuth: AuthStatus;
}

function AddReview({films, isAuth}: AddReviewProps): JSX.Element {
  const film = useFilm(films);

  return film ? (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardBackground background={film.backgroundImgSrc} alt={film.name}></FilmCardBackground>

        <Header isAuthorised={isAuth} className=''>
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
          <img src={film.posterImgSrc} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <AddReviewForm/>

    </section>
  ) : (
    <Navigate to="*"/>
  );
}

export default AddReview;
