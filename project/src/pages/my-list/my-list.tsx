import {FilmInfo} from '../../types/film-info';
import ListFilms from '../../components/list-films/list-films';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {AuthStatus} from '../../types/auth-status';


type MyListProps = {
  films: FilmInfo[];
}

function MyList({films}: MyListProps): JSX.Element {
  const filmsInList = films.filter((film) => film.isInList);

  return (
    <div className="user-page">
      <Header isAuthorised={AuthStatus.Authorized} className='user-page__head'>
        <h1 className="page-title user-page__title">My list<span className="user-page__film-count">{filmsInList.length.toString()}</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListFilms films={films}/>
      </section>
      <Footer/>
    </div>
  );
}

export default MyList;
