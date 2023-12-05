import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  //fetch trailer video
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <>
      <div>
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&loop=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
////&mute=1 stop the volume of video
export default VideoBackground;
