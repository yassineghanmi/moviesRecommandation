import React from "react";
import NotFoundImg from "../../public/assets/images/404.jpg";
const NotFound = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex">
        <div className="flex-1 flex items-center justify-center">
          <div>
            <h1 className="uppercase font-medium text-6xl">404 not found</h1>
            <h3 className="font-medium text-lg mb-10 mt-4">$#&%, you broke something! Just kidding...</h3>
            <p>
              You didn't break the internet, but we can't find what you are
              looking for.
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={NotFoundImg} alt="deadpool404" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
