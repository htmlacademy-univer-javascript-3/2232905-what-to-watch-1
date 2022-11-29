import Footer from '../../components/footer/footer';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import {Link, Navigate, useSearchParams} from 'react-router-dom';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import {FilmInfo} from '../../types/film-info';
import {AuthStatus} from '../../types/auth-status';
import {useFilm} from '../../hooks/use-film';
import FilmDetails from './film-details';
import FilmOverview from './film-overview';
import FilmReviews from './film-reviews';
import ListFilms from '../../components/list-films/list-films';

export enum FilmPageContentType {
  Overview='Overview',
  Details='Details',
  Reviews='Reviews'
}

type FilmPageProps = {
  isAuth: AuthStatus;
  films: FilmInfo[];
}

function Film({isAuth, films}: FilmPageProps): JSX.Element {
  const film = useFilm(films);

  const [searchParams, setSearchParams] = useSearchParams();
  const contentType = searchParams.get('content');

  let content = null;
  let moreLikeThisFilms: FilmInfo[] = [];
  if (film){
    moreLikeThisFilms = films.filter((f) => f.genre === film.genre);

    switch (contentType) {
      case FilmPageContentType.Overview:
        content = <FilmOverview filmInfo={film}/>;
        break;
      case FilmPageContentType.Details:
        content = <FilmDetails filmInfo={film}/>;
        break;
      case FilmPageContentType.Reviews:
        content = <FilmReviews filmInfo={film}/>;
        break;
      default:
        content = <FilmOverview filmInfo={film}/>;
        break;
    }
  }

  return (
    film ?
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <FilmCardBackground background={film.backgroundImgSrc} alt={film.name}/>

            <Header isAuthorised={isAuth} className='film-card__head'/>

            <div className="film-card__wrap">
              <FilmCardDescription film={film} films={films}>
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
              </FilmCardDescription>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImgSrc} alt={film.name} width="218" height="327"/>
              </div>

              {content}

            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <ListFilms films={moreLikeThisFilms}/>
          </section>

          <Footer/>
        </div>
      </>
      : <Navigate to="*"/>);
}

export default Film;
