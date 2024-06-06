import React, { useState, useEffect } from "react";

const Spinner = () => {
  return (
    <video
      id="spinnerVideo"
      className="h-screen w-full bg-black"
      autoPlay
      loop
      muted={true}
    >
      <source src="../public/assets/videos/loader.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Spinner;
