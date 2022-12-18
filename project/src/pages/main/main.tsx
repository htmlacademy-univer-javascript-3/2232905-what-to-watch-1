import {FilmInfo} from '../../types/film-info';
import ListFilms from '../../components/list-films/list-films';
import FilmCardBackground from '../../components/film-card-background/film-card-background';
import Header from '../../components/header/header';
import {AuthStatus} from '../../types/auth-status';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import {Genre} from '../../types/genre';
import Footer from '../../components/footer/footer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, getFilmsByGenre} from '../../store/action';


export type MainPageProps = {
  isAuth: AuthStatus;
  promoFilm: FilmInfo;
}


function Main({isAuth, promoFilm}: MainPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {genre, films} = useAppSelector((state) => state);

  const showGenresNavigate = () => {
    const links = [];

    for (const value of Object.values(Genre)){
      const className = value === genre ? 'catalog__genres-item--active' : '';
      links.push(
        <li className={`catalog__genres-item ${className}`}>
          <button className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenre(value));
              dispatch(getFilmsByGenre());}}
            style={{background:'transparent', border:'none'}}
          >
            {value}
          </button>
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
          <ListFilms films={films} />
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
