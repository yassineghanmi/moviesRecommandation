import React from "react";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import MovieList from "../components/home/MovieList";
const Home = () => {
  return (
    <div>
      <div className="bg-black h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
      <MovieList />
    </div>
  );
};

export default Home;
