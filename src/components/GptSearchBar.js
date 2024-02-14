import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptmoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // for each movies search on tmdb  movies search api
  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  }; // give me promise  not result

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an Api call to GPT api and GEt movies Results and from openai reamde import file
    const gptQuery =
      "Act as a Movies Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only name of 5 movies,comma seperated like the exampleresult given ahead.example result:Gaddar,sholey,don,jawan,pathan";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }], // gptquery give brief explanation about search text searchText.current.value her take value which i type in search box and git to openai give result base on it
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      //show error write error
    }

    console.log(gptResults.choices?.[0]?.message?.content); //here choice come from openai syntax
    // jawan,pathan,dunki,chennai express,don
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    //["jawan","pathan","dunki","chennai express","don"] split transfer normal string to array

    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
    //[promise,promise,promise,promise,promise] 5 movies promise
    const tmdbResults = await Promise.all(promiseArray); //fisrt get all 5 promise  data from tmdb api then show result for all
    console.log(tmdbResults);
    //passing both movies name and all movies result in action
    dispatch(
      addGptmoviesResult({ moviesNames: gptMovies, moviesResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
