import {useAppDispatch, useAppSelector} from '../../hooks';
import {getHashCode} from '../../utils';
import {getFilms, getSelectedGenre} from '../../store/main-process/selectors';
import {changeGenreAction} from '../../store/main-process/main-process';
import {ALL_GENRES} from '../../const';


function CatalogGenres(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms);
  const selectedGenre = useAppSelector(getSelectedGenre);
  const catalogGenresData = [ALL_GENRES, ...new Set(films.map((x) => x.genre))].slice(0, 10);
  return (
    <ul className="catalog__genres-list">
      {catalogGenresData.map((genre) => (
        <li key={getHashCode(genre)} className={`catalog__genres-item ${genre === selectedGenre ? 'catalog__genres-item--active' : ''}`}>
          <button className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenreAction(genre));
            }}
            style={{background: 'transparent', border: 'none'}}
          >
            {genre}
          </button>
        </li>))}
    </ul>
  );
}

export default CatalogGenres;
