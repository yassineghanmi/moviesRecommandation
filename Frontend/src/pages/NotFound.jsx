import React from "react";
import NotFoundImg from "../../public/assets/images/404.jpg";
import Header from "../components/home/Header";
const NotFound = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex flex-col items-center md:flex-row py-12 md:py-0" data-aos="zoom-out" data-aos-delay="150">
        <div className="flex items-center justify-between px-8 xl:px-28">
          <div>
            <h1 className="uppercase font-medium text-6xl">404 not found</h1>
            <h3 className="font-medium text-lg mb-10 mt-4">
              $#&%, you broke something! Just kidding...
            </h3>
            <p>
              You didn't break the internet, but we can't find what you are
              looking for.
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img src={NotFoundImg} alt="deadpool404" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
