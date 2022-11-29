import {Link} from 'react-router-dom';
import {FilmPageContentType} from './film';

type FilmNavProps = {
  activeItem: FilmPageContentType;
  filmId: number;
}

function FilmNav({activeItem, filmId}: FilmNavProps) {

  const showFilmNav = () => {
    const links = [];

    for (const item of Object.values(FilmPageContentType)){
      const className = item === activeItem ? 'film-nav__item--active' : '';
      links.push(
        <li className={`film-nav__item ${className}`}>
          <Link className="film-nav__link" to={{pathname: `/films/${filmId}`, search: `?content=${item}`}}>{item}</Link>
        </li> );
    }

    return links;
  };

  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {
          showFilmNav()
        }
      </ul>
    </nav>
  );
}

export default FilmNav;
