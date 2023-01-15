import ListFilms from '../../components/list-films/list-films';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks';
import CatalogGenres from '../../components/catalog-genres/catalog-genres';
import {getFilms, getPromoFilm, getSelectedGenre} from '../../store/main-process/selectors';
import {Genre} from '../../types/genre';


function Main(): JSX.Element {
  const selectedGenre = useAppSelector(getSelectedGenre);
  const promoFilm = useAppSelector(getPromoFilm);
  const films = useAppSelector(getFilms);
  const filmsToShow = selectedGenre === Genre.All ? films : films.filter((film) => film.genre === selectedGenre);

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
              <FilmCardDescription film={promoFilm}/>
            </div>
          </div>
        </section>
      }

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CatalogGenres/>
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
