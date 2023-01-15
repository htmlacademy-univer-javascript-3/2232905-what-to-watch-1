import Footer from '../../components/footer/footer';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import {Link, useParams} from 'react-router-dom';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import ListFilms from '../../components/list-films/list-films';
import Tab from '../../components/tab/tab';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import LoadingScreen from '../../components/loading/loading';
import {getFilm, getIsFilmLoaded, getReviews, getSimilarFilm} from '../../store/film-process/selectors';
import {getFilmAction, getFilmReviewsAction, getSimilarFilmsAction} from '../../store/api-actions';
import NotFound from '../not-found/not-found';


function Film(): JSX.Element {
  const params = useParams();
  const filmId = Number(params.id);
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilm);
  const reviews = useAppSelector(getReviews);
  const isFilmLoaded = useAppSelector(getIsFilmLoaded);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(getFilmAction(filmId));
    dispatch(getSimilarFilmsAction(filmId));
    dispatch(getFilmReviewsAction(filmId));
  }, [filmId, dispatch]);

  if (!isFilmLoaded || !similarFilms || !reviews)
  {return <LoadingScreen/>;}

  if (!film)
  {return <NotFound/>;}

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmCardBackground background={film.backgroundImage} alt={film.name}/>

          <Header className='film-card__head'/>

          <div className="film-card__wrap">
            <FilmCardDescription film={film}>
              <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
            </FilmCardDescription>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <Tab filmInfo={film} reviews={reviews}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <ListFilms films={similarFilms}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Film;
