import YouTube from "react-youtube";

interface Props {
  videoId?: string;
}

const MovieClip = ({ videoId }: Props) => {
  const _onReady = (event: { target: { pauseVideo: () => void } }) => {
    event.target.pauseVideo();
  };
  const options = {
    height: "500vh",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return (
    <YouTube videoId={videoId} opts={options} onReady={_onReady} id="video" />
  );
};

export default MovieClip;
