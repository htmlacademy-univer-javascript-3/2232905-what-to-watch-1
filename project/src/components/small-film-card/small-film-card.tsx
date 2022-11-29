
type SmallFilmCardProps = {
  id: number;
  posterImageSource: string;
  filmName: string;
  setFilmId: (id: number | null) => void;
}


function SmallFilmCard({id, posterImageSource, filmName, setFilmId}: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div
        className="small-film-card__image"
        onMouseEnter={() => setFilmId(id)}
        onMouseOut={() => setFilmId(null)}
      >
        <img src={posterImageSource}
          alt={filmName} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmName}
        </a>
      </h3>
    </article>
  );
}


export default SmallFilmCard;
