import {FilmInfo} from '../../types/film-info';
import {useFilm} from '../../hooks/use-film';
import NotFound from '../not-found/not-found';

type PlayerProps = {
  films: FilmInfo[];
}

function Player({films}: PlayerProps): JSX.Element {
  const film = useFilm(films);

  return film ? (
    <div className="player">
      <video src={film.videoSrc} className="player__video" poster={film.posterImgSrc}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <NotFound/>
  );
}

export default Player;
