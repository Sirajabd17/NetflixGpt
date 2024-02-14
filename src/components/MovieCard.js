import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 pr-4">
      <img alt="Movies Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;