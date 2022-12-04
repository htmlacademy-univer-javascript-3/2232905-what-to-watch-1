

type VideoPlayerProps = {
  videoSrc: string;
  posterVideo: string;
  width: number;
  height: number;
}

function VideoPlayer({videoSrc, posterVideo, width, height}: VideoPlayerProps) {
  return (
    <video src={`${videoSrc}#t=0`} autoPlay width={width} height={height} muted poster={posterVideo}/>
  );
}

export default VideoPlayer;
