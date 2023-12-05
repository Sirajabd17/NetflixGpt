import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //early return or if (!movies) return; if movies is null or not present then return

  if (movies == null) return;
  const mainMovies = movies[0];

  const { original_title, overview, id } = mainMovies;
  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </>
  );
};
export default MainContainer;
