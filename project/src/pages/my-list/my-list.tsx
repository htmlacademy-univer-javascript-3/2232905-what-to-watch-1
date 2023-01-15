import ListFilms from '../../components/list-films/list-films';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {getFavoriteFilms} from '../../store/favorite-films-process/selectors';


function MyList(): JSX.Element {
  const films = useAppSelector(getFavoriteFilms);

  return (
    <div className="user-page">
      <Header className='user-page__head'>
        <h1 className="page-title user-page__title">My list<span className="user-page__film-count">{films.length.toString()}</span></h1>
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
