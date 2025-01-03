import ReactPlayer from "react-player";

interface Props {
  videoPath?: string;
}

const Video = ({ videoPath }: Props) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player fixed-bottom"
        url={videoPath}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default Video;
