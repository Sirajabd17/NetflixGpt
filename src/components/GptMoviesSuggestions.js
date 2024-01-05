import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const GptMoviesSuggestions = () => {
  const { moviesResults, moviesNames } = useSelector((store) => store.gpt);
  if (!moviesNames) return null;

  return (
    <div className="p-4 m-4  bg-black bg-opacity-90 ">
      {moviesNames.map((moviesNames, index) => (
        <MovieList
          key={moviesNames}
          title={moviesNames}
          movies={moviesResults[index]}
        />
      ))}
    </div>
  );
};
export default GptMoviesSuggestions;
