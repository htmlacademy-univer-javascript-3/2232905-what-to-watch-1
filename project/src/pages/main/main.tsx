import ListFilms from '../../components/list-films/list-films';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import Footer from '../../components/footer/footer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import CatalogGenres from '../../components/catalog-genres/catalog-genres';
import {getFilms, getFilmsCountToShow, getPromoFilm, getSelectedGenre} from '../../store/main-process/selectors';
import {ALL_GENRES, FILMS_COUNT_STEP} from '../../const';
import {changeFilmsCountToShowAction} from '../../store/main-process/main-process';
import {useEffect} from 'react';


function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector(getSelectedGenre);
  const promoFilm = useAppSelector(getPromoFilm);
  const films = useAppSelector(getFilms);
  const filmsCountToShow = useAppSelector(getFilmsCountToShow);
  const filmsToShow = selectedGenre === ALL_GENRES ? films : films.filter((film) => film.genre === selectedGenre);

  useEffect(() => {
    dispatch(changeFilmsCountToShowAction(FILMS_COUNT_STEP));
  }, [dispatch]);

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
          <ListFilms films={filmsToShow.slice(0, filmsCountToShow)}/>
          {filmsToShow.length > filmsCountToShow ?
            <div className="catalog__more">
              <button
                className="catalog__button"
                type="button"
                onClick={() => dispatch(changeFilmsCountToShowAction(filmsCountToShow + FILMS_COUNT_STEP))}
              >
              Show more
              </button>
            </div> :
            null}
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
