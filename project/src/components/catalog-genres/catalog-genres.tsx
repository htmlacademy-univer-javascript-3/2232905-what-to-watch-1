import {useAppDispatch, useAppSelector} from '../../hooks';
import {Genre} from '../../types/genre';
import {changeGenreAction} from '../../store/action';
import {getHashCode} from '../../utils';
import {getFilms, getSelectedGenre} from "../../store/main-process/selectors";


function CatalogGenres(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms)
  const selectedGenre = useAppSelector(getSelectedGenre)
  const catalogGenresData = [Genre.All, ...new Set(films.map((x) => x.genre))];
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
