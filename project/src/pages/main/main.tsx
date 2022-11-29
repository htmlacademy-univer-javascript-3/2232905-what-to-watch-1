import {FilmInfo} from '../../types/film-info';
import ListFilms from '../../components/list-films/list-films';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import {AuthStatus} from '../../types/auth-status';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import {Link, useSearchParams} from 'react-router-dom';
import {Genre} from '../../types/genre';
import Footer from '../../components/footer/footer';


export type MainPageProps = {
  isAuth: AuthStatus;
  films: FilmInfo[];
  promoFilm: FilmInfo;
}


function Main({isAuth, films, promoFilm}: MainPageProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedGenre = searchParams.get('genre');

  const toSearchFormat = (str: string) => str.replaceAll(' ', '-').replaceAll('&', 'and');

  const filmsToShow = selectedGenre && selectedGenre !== toSearchFormat(Genre.All) ?
    films.filter((film) => toSearchFormat(film.genre) === selectedGenre) :
    films;

  const showGenresNavigate = () => {
    const links = [];

    for (const value of Object.values(Genre)){
      const className = toSearchFormat(value) === selectedGenre ? 'catalog__genres-item--active' : '';
      links.push(
        <li className={`catalog__genres-item ${className}`}>
          <Link className="catalog__genres-link" to={{pathname: '', search: `?genre=${toSearchFormat(value)}`}}>{value}</Link>
        </li> );
    }

    return links;
  };

  return (
    <>
      <section className="film-card">
        <FilmCardBackground background={promoFilm.backgroundImgSrc} alt={promoFilm.name}/>

        <Header isAuthorised={isAuth} className='film-card__head'/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImgSrc} alt={promoFilm.name} width="218" height="327"/>
            </div>
            <FilmCardDescription film={promoFilm} films={films}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              showGenresNavigate()
            }
          </ul>
          <ListFilms films={filmsToShow} />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Main;
