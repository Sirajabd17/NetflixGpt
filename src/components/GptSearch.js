import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className=".bg-no-repeat bg-fixed .bg-center"
          src={BG_URL}
          alt="logo"
        />
      </div>

      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
