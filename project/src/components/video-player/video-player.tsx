

type VideoPlayerProps = {
  videoSource: string;
  posterVideo: string;
  width: number;
  height: number;
}

function VideoPlayer({videoSource, posterVideo, width, height}: VideoPlayerProps) {
  return (
    <video src={`${videoSource}#t=0`} autoPlay width={width} height={height} muted poster={posterVideo}/>
  );
}

export default VideoPlayer;
