import {FilmInfo} from '../../types/film-info';
import SmallFilmCard from '../small-film-card/small-film-card';


export type ListFilmsProps = {
  films: FilmInfo[];
}

function ListFilms({films}: ListFilmsProps): JSX.Element{
  return (
    <div className="catalog__films-list">
      {
        films.map(
          (film) =>
            (
              <SmallFilmCard
                key={film.id}
                id={film.id}
                posterImageSource={film.posterImage}
                videoSrc={film.videoLink}
                filmName={film.name}
              />
            )
        )
      }
    </div>
  );
}

export default ListFilms;
