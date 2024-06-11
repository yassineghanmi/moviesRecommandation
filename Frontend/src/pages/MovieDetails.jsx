import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  let location = useLocation();

  const { movie } = location.state || {};

  console.log(movie.id);

  useEffect(() => {
    const img = new Image();
    img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <div className={`relative px-28 py-28 flex items-center`}>
        <div
          className={`absolute z-0 inset-0 filter blur-sm transition-opacity duration-1000 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="relative flex-1 bg-black text-white p-8 rounded-md"
          data-aos="zoom-out"
          data-aos-delay="300"
        >
          <h1 className="text-white uppercase font-bold text-6xl mb-12 md:mb-16">
            {movie.title}
          </h1>
          <div className="flex gap-8 opacity-100">
            <ul className="text-red-600 p-0 m-0 list-none flex items-center justify-left gap-1">
              <li>
                <i className="fas fa-star text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star-half text-primary"></i>
              </li>
            </ul>
            <span className="text-white">
              {movie.vote_average.toFixed(2)} (IMDb)
            </span>
          </div>
          <div className="flex text-white items-center gap-4 my-4">
            <span className="inline-flex items-center justify-center bg-gray-600 text-white text-xs font-bold px-1.5 py-1 rounded border border-gray-600">
              <i className="fa-solid fa-eye me-1"></i>
              PG
            </span>
            <i className="fa-solid fa-circle text-[8px] mx-2" />
            <p>1hr 44mins</p>
            <i className="fa-solid fa-circle text-[8px] mx-2" />
            <p>Feb 2018</p>
          </div>
          <p className="text-neutral-300 max-w-screen-sm hidden md:block">
            {movie.overview}
          </p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="backdrop"
          className="h-96 object-cover scale-125 pl-2"
        />
      </div>
    </div>
  );
};

export default MovieDetails;
