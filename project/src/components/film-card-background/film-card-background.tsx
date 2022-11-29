type FilmCardBackgroundProps = {
  background?: string;
  alt: string;
}

function FilmCardBackground({background, alt}: FilmCardBackgroundProps) : JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={background} alt={alt}/>
    </div>
  );
}

export default FilmCardBackground;
