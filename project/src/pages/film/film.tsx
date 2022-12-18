import Footer from '../../components/footer/footer';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import {Link, Navigate} from 'react-router-dom';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import {FilmInfo} from '../../types/film-info';
import {AuthStatus} from '../../types/auth-status';
import {useFilm} from '../../hooks/use-film';
import ListFilms from '../../components/list-films/list-films';
import Tab from '../../components/tab/tab';


type FilmPageProps = {
  isAuth: AuthStatus;
  films: FilmInfo[];
}

function Film({isAuth, films}: FilmPageProps): JSX.Element {
  const film = useFilm(films);

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

              <Tab filmInfo={film}/>

            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <ListFilms films={films.filter((f) => f.genre === film.genre)}/>
          </section>

          <Footer/>
        </div>
      </>
      : <Navigate to="*"/>);
}

export default Film;
