import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMoviesSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
