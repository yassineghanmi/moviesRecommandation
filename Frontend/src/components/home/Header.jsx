import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center py-5 px-8 xl:px-28 text-red-600 relative z-10 bg-black">
      <span className="text-xl font-bold cursor-pointer" onClick={() => navigate("/home")}>
        CineSuggest
      </span>
      <div className="flex flex-1 gap-16 text-white justify-center">
        <Link
          to={"/home"}
          className="text-sm font-medium active:text-red-600 cursor-pointer"
        >
          Home
        </Link>
        <a className="text-sm font-medium active:text-red-600 cursor-pointer">
          Feature
        </a>
        <a className="text-sm font-medium active:text-red-600 cursor-pointer">
          Link
        </a>
      </div>
      <ul>
        <div>
          <span>
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M19.2036 8.66919V12.6792"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M21.2497 10.6741H17.1597"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </div>
      </ul>
    </div>
  );
};

export default Header;
