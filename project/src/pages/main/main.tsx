import ListFilms from '../../components/list-films/list-films';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import Footer from '../../components/footer/footer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenreAction} from '../../store/action';


function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const {selectedGenre, films, promoFilm, genres} = useAppSelector((state) => state);
  const filmsToShow = selectedGenre === 'All Genres' ? films : films.filter((film) => film.genre === selectedGenre);

  const showGenresNavigate = () => {
    const links = [];

    for (const value of Array.from(genres)) {
      const className = value === selectedGenre ? 'catalog__genres-item--active' : '';
      links.push(
        <li className={`catalog__genres-item ${className}`}>
          <button className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenreAction(value));
            }}
            style={{background: 'transparent', border: 'none'}}
          >
            {value}
          </button>
        </li>);
    }

    return links;
  };

  return (
    <>
      {
        promoFilm &&
        <section className="film-card">
          <FilmCardBackground background={promoFilm.backgroundImage} alt={promoFilm.name}/>

          <Header className='film-card__head'/>

          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327"/>
              </div>
              <FilmCardDescription film={promoFilm} films={films}/>
            </div>
          </div>
        </section>
      }

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              showGenresNavigate()
            }
          </ul>
          <ListFilms films={filmsToShow}/>
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
