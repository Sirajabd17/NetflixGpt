import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <>
        <div className="bg-black">
          <div className="-mt-36 pl-10 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
            <MovieList title={"Popular"} movies={movies.PopularMovies} />
            <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          </div>
        </div>
      </>
    )
  );
};
export default SecondaryConatiner;

//MoviesList -Popular MoviesCard * n

//MoviesList -Now Playing
//MoviesList -Trending
//MoviesList -Horror
//MoviesList
