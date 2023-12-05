const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-56 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font bold">{title}</h1>
      <p className="py-6 text-base w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black  font-bold p-2 rounded-lg px-10  mr-4 hover:bg-opacity-80">
          {" "}
          ▶️ Play
        </button>
        <button className="bg-gray-400 text-white p-2 rounded-lg  bg-opacity-30 px-10 hover:bg-opacity-80">
          ℹ️ More Info{" "}
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
