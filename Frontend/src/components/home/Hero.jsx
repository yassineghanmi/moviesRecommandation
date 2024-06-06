import React from "react";

const Hero = () => {
  return (
    <div className="relative  flex-grow overflow-hidden h-screen">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="absolute inset-y-0 right-0 md:w-8/12 w-full h-4/6 md:h-full object-cover"
          src="../public/assets/images/deadpool_main_card.jpg"
          alt="deadpool"
        />
        <div className="absolute inset-y-0 right-0 md:w-8/12 w-full h-4/6  md:h-full bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent opacity-70"></div>
      </div>
      <div className="absolute bottom-0 p-8 md:w-8/12 w-full h-4/6 md:h-full md:inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black to-transparent flex flex-col justify-center md:pl-28 z-10">
        <h1 className="text-white uppercase font-bold text-8xl mb-16">
          Deadpool
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
          <span className="text-white">3.5 (IMDb)</span>
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
        <p className="text-neutral-300 max-w-screen-sm">
          Jumbo, also known as Jumbo the Elephant and Jumbo the Circus Elephant,
          was a 19th-century male African bush elephant born in Sudan. Jumbo was
          exported to Jardin des Plantes, a zoo in Paris, and then transferred
          in 1865 to London Zoo in England. Despite public protest, Jumbo was
          sold to P. T. Barnum, who took him to the United States for exhibition
          in March 1882.
        </p>
      </div>
    </div>
  );
};

export default Hero;
