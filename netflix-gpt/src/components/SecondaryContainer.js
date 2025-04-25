import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black w-screen aspect-video">
        <div className="-mt-52 relative z-20 pl-12">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.upcomingMovies}
          />
        </div>
        {/* 
      Multiple MovieList
      - Popular
        -MovieCard * n
      - Trending
      - Now Playing
      - Diffent Genres
      */}
      </div>
    )
  );
};

export default SecondaryContainer;
