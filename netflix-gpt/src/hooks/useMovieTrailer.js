import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer video and updtaing the store with video data

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results?.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    // setTrailerID(trailer.key) //Instead of storing key in useState, I will use movileSlice, I will create new action, i.e., addTrailerVideo
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
