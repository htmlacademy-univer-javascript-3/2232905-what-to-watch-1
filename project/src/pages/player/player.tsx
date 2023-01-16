import NotFound from '../not-found/not-found';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilm, getIsFilmLoaded} from '../../store/film-process/selectors';
import {useEffect, useRef, useState} from 'react';
import {getFilmAction} from '../../store/api-actions';
import LoadingScreen from '../../components/loading/loading';
import browserHistory from '../../browser-history';
import moment from 'moment';


function Player(): JSX.Element {
  const filmId = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const isFilmLoaded = useAppSelector(getIsFilmLoaded);
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleButtonClickPlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleButtonClickFullScreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  };

  const getFormatTime = (seconds: number) => {
    if (seconds / 60 / 60 >= 1) {
      return moment(seconds * 1000).format('-hh:mm:ss');}
    return moment(seconds * 1000).format('-mm:ss');
  };


  const handleVideoTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const target = (e.target as HTMLVideoElement);
    if (isNaN(target.duration)) {
      return;
    }
    setProgress((target.currentTime / target.duration) * 100);
    if (videoRef.current) {
      const time = videoRef.current.duration - videoRef.current.currentTime;
      setTimeLeft(Math.trunc(time));
      if (time === 0)
      {setIsPlaying(false);}
    }
  };

  useEffect(() => {
    dispatch(getFilmAction(filmId));
  }, [filmId, dispatch]);

  if (!isFilmLoaded)
  {return <LoadingScreen/>;}

  if (!film)
  {return <NotFound/>;}

  return (
    <div className="player">
      <video
        src={film.videoLink}
        ref={videoRef}
        className="player__video"
        poster={film.backgroundImage}
        onTimeUpdate={(event) => handleVideoTimeUpdate(event)}
        onDoubleClick={handleButtonClickFullScreen}
      >
      </video>

      <button type="button" className="player__exit" onClick={() => browserHistory.back()}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getFormatTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleButtonClickPlay}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              { !isPlaying ?
                <use xlinkHref="#play-s"/> :
                <use xlinkHref="#pause"/>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleButtonClickFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
