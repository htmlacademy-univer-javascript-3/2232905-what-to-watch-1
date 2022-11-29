import {FilmInfo} from '../../types/film-info';
import SmallFilmCard from '../small-film-card/small-film-card';
import {useState} from 'react';


export type ListFilmsProps = {
  films: FilmInfo[];
}

function ListFilms({films}: ListFilmsProps): JSX.Element{
  const state = useState<{filmId: number | null}>({filmId: null});
  return (
    <div className="catalog__films-list">
      {
        films.map(
          (film) =>
            (
              <SmallFilmCard
                setFilmId={(id: number | null) => state[1]({filmId: id})}
                key={film.id}
                id={film.id}
                posterImageSource={film.posterImgSrc}
                filmName={film.name}
              />
            )
        )
      }
    </div>
  );
}

export default ListFilms;
