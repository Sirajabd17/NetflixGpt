import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainComponent";
import SecondaryConatiner from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import getUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  getUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryConatiner />
    </div>
  );
};
export default Browse;

// //const api =async()=>{
//    const data = await fetch ("",api option)
//    const json= await data.json()
//    console.log(json)
// }

// useEffect(()=>{
//   getNowPlayingMovies();

// },
// [])
