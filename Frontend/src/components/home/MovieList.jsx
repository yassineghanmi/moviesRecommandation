import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const movie_token = import.meta.env.VITE_TMDB_KEY;

  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          {
            headers: {
              Authorization: `Bearer ${movie_token}`,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div className="text-white px-8 xl:px-28 py-12 bg-black">
      <h3 className="text-2xl font-medium mb-7 mt-28">Popular Movies</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative cursor-pointer overflow-hidden transition-transform transform hover:scale-125 duration-300 hover:z-10"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
              className="h-full w-full object-cover"
              data-aos="zoom-out"
              data-aos-delay="150"
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end justify-between p-8">
              <button className="w-8 h-8 hover:bg-red-600 hover:scale-110 duration-100 rounded-full flex items-center justify-center border border-white">
                <i className="fa-regular fa-heart"></i>
              </button>
              <button
                className="w-8 h-8 hover:bg-yellow-600 hover:scale-110 duration-100 rounded-full flex items-center justify-center border border-white"
                onClick={() => navigate("/details", { state: { movie } })}
              >
                <i className="fa-solid fa-ticket" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
