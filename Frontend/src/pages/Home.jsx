import React from "react";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
const Home = () => {
  return (
    <div>
      <div className="bg-black h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
