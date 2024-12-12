import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-[url(https://cdn.dribbble.com/users/3524358/screenshots/6456962/ezgif.com-video-to-gif-4.gif)] h-screen pt-8 flex justify-between flex-col w-full">
      <img
        className="w-16 ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt="uber-logo"
      />
      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-3xl font-bold">Get Started With Uber</h2>
        <Link
          to="/login"
          className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
