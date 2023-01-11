import Footer from '../../components/footer/footer';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import {Link, useParams} from 'react-router-dom';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import ListFilms from '../../components/list-films/list-films';
import Tab from '../../components/tab/tab';
import {useEffect, useState} from 'react';
import {FilmInfo, Review} from '../../types/film-info';
import {getFilm, getFilmReviews, getSimilarFilms} from '../../services/api-functions';
import {useAppDispatch} from '../../hooks';
import {redirectAction} from '../../store/action';
import {AppRoute} from '../../constants/constants';
import LoadingScreen from '../loading/loading';


function Film(): JSX.Element {
  const [film, setFilm] = useState<FilmInfo>();
  const [similarFilms, setSimilarFilms] = useState<FilmInfo[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const params = useParams();
  const filmId = Number(params.id);

  const dispatch = useAppDispatch();


  useEffect(() => {
    getFilm(filmId)
      .then(({data}) => {
        setFilm(data);
      })
      .catch(() => {
        dispatch(redirectAction(AppRoute.NotFound));
      });
    getSimilarFilms(filmId).then(({data}) => {
      setSimilarFilms(data);
    });
    getFilmReviews(filmId).then(({data}) => {
      setReviews(data.sort((firstReview, secondReview) => {
        if (firstReview.date === secondReview.date)
        {return 0;}
        if (firstReview.date > secondReview.date)
        {return -1;}
        else
        {return 1;}
      }));
    },);
  },
  [filmId]); /* eslint-disable-line */

  return (!film || !similarFilms) ?
    (<LoadingScreen/>) : (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <FilmCardBackground background={film.backgroundImage} alt={film.name}/>

            <Header className='film-card__head'/>

            <div className="film-card__wrap">
              <FilmCardDescription film={film} films={similarFilms}>
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
