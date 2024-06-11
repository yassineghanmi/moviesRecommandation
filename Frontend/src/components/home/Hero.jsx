import axios from "axios";
import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const Hero = () => {
  const movie_token = import.meta.env.VITE_TMDB_KEY;
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [highestRate, setHighestRate] = useState(null);
  const [trailer, setTrailer] = useState("");
  const [open, setOpen] = useState(false);

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

        const movies = response.data.results;

        const highestRatedMovie = movies.reduce((highest, movie) => {
          return movie.vote_average > highest.vote_average ? movie : highest;
        }, movies[0]);
        console.log(movies);
        setHighestRate(highestRatedMovie);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = `https://image.tmdb.org/t/p/original${highestRate?.backdrop_path}`;
    img.onload = () => {
      setIsImageLoaded(true);
    };

    const fetchMoviesTrailer = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${highestRate?.id}/videos?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${movie_token}`,
            },
          }
        );
        let movieTrailers = response.data.results.filter(
          (movie) => movie.type == "Trailer"
        );
        setTrailer(movieTrailers[0]?.key);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (highestRate) {
      fetchMoviesTrailer();
    }
  }, [highestRate]);

  return (
    <div className="relative flex-grow overflow-hidden h-screen">
      <div className="absolute inset-0 w-full h-full">
        <img
          className={`absolute inset-y-0 right-0 xl:w-8/12 w-full h-4/6 xl:h-full object-cover transition-opacity duration-1000 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={`https://image.tmdb.org/t/p/original${highestRate?.backdrop_path}`}
          alt="deadpool"
        />
        <div className="absolute text-white flex items-center justify-center xl:p-60 xl:justify-end inset-y-0 right-0 xl:w-8/12 w-full h-4/6  xl:h-full bg-gradient-to-t xl:bg-gradient-to-r from-black to-transparent opacity-80">
          <div
            className="flex gap-4 cursor-pointer hover:text-red-600 items-center justify-center duration-100"
            data-aos="zoom-out"
            data-aos-delay="300"
            onClick={() => setOpen(true)}
          >
            <i className="fa-regular fa-circle-play text-6xl " />
            <span className="uppercase font-bold text-2xl">
              {" "}
              Watch Trailer{" "}
            </span>
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={[
                {
                  type: "youtube",
                  src: `https://www.youtube.com/embed/${trailer}`,
                  title: "Movie Trailer",
                  width: 2160,
                  height: 1215,
                },
              ]}
              render={{
                slide: ({ slide, rect }) =>
                  slide.type === "youtube" ? (
                    <iframe
                      width={Math.min(
                        slide.width,
                        rect.width,
                        (slide.width * rect.height) / slide.height
                      )}
                      height={Math.min(
                        slide.height,
                        rect.height,
                        (slide.height * rect.width) / slide.width
                      )}
                      src={slide.src}
                      title={slide.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : undefined,
              }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 p-8 xl:w-8/12 w-full h-4/6 xl:h-full xl:inset-0 bg-gradient-to-t xl:bg-gradient-to-r from-black via-black to-transparent flex flex-col justify-end xl:justify-center xl:pl-28 z-10">
        <h1
          className="text-white uppercase font-bold text-6xl xl:text-8xl mb-12 md:mb-16"
          data-aos="zoom-out"
          data-aos-delay="150"
        >
          {highestRate?.original_title}
        </h1>
        <div
          className="flex gap-8 opacity-100"
          data-aos="zoom-out"
          data-aos-delay="150"
        >
          <ul className="text-red-600 p-0 m-0 list-none flex items-center justify-left gap-1">
            {[...Array(Math.floor(highestRate?.vote_average / 2 || 0))].map(
              (_, i) => (
                <li key={i}>
                  <i className="fas fa-star text-primary"></i>
                </li>
              )
            )}
            {highestRate?.vote_average % 2 !== 0 && (
              <li>
                <i className="fas fa-star-half text-primary"></i>
              </li>
            )}
          </ul>
          <span className="text-white">
            {highestRate?.vote_average.toFixed(2)} (IMDb)
          </span>
        </div>
        <div
          className="flex text-white items-center gap-4 my-4"
          data-aos="zoom-out"
          data-aos-delay="150"
        >
          <span className="inline-flex items-center justify-center bg-gray-600 text-white text-xs font-bold px-1.5 py-1 rounded border border-gray-600">
            <i className="fa-solid fa-eye me-1"></i>
            PG
          </span>
          <i className="fa-solid fa-circle text-[8px] mx-2" />
          <p>1hr 44mins</p>
          <i className="fa-solid fa-circle text-[8px] mx-2" />
          <p>{formatDate(highestRate?.release_date)}</p>
        </div>
        <p
          className="text-neutral-300 max-w-screen-sm hidden md:block"
          data-aos="zoom-out"
          data-aos-delay="150"
        >
          {highestRate?.overview}
        </p>
      </div>
    </div>
  );
};

export default Hero;
