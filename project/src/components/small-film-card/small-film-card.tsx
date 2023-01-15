import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {TimeoutId} from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

type SmallFilmCardProps = {
  id: number;
  posterImageSource: string;
  videoSrc: string;
  filmName: string;
}


function SmallFilmCard({id, posterImageSource, videoSrc, filmName}: SmallFilmCardProps): JSX.Element {
  const [playerState, setPlayerState] = useState<{isPlayerOn: boolean; timeoutId: TimeoutId | null}>({isPlayerOn: false, timeoutId: null});
  const ref = useRef(null);
  const filmCardWidth = 280;
  const filmCardHeight = 175;

  const handleMouseOver = () => {
    const timeoutId = setTimeout(() => setPlayerState({...playerState, isPlayerOn: true}), 1000);
    setPlayerState({...playerState, timeoutId: timeoutId});
  };
  const handleMouseOut = () => {
    setPlayerState({...playerState, isPlayerOn: false});
    if (playerState.timeoutId !== null) {
      clearTimeout(playerState.timeoutId);
    }
  };

  useEffect(() => {
    if (ref.current !== null) {
      const card: EventTarget = ref.current;
      if (card) {
        card.addEventListener('mouseover', handleMouseOver);
        card.addEventListener('mouseout', handleMouseOut);

        return () => {
          card.removeEventListener('mouseover', handleMouseOver);
          card.removeEventListener('mouseout', handleMouseOut);
        };
      }
    }
  }
  );

  return (
    <article className="small-film-card catalog__films-card" ref={ref}>
      <Link to={`/films/${id}`}>
        <div
          className="small-film-card__image"
        >
          {
            playerState.isPlayerOn ?
              <VideoPlayer videoSrc={videoSrc} posterVideo={posterImageSource} width={filmCardWidth} height={filmCardHeight}/> :
              <img src={posterImageSource} alt={filmName} width={filmCardWidth} height={filmCardHeight}/>
          }
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{filmName}</Link>
      </h3>
    </article>
  );
}


export default SmallFilmCard;
