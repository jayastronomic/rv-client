import React from "react";
import "../styles/Banner.css";
import logo from "../assets/homelogo.PNG";

const Banner = () => {
  return (
    <div className="flex home">
      <div className="bg-black bg-opacity-50">
        <div className="flex justify-center items-center p-12">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-bold text-white">
              <span className="green">
                A world where only Real Vibes exist.
              </span>
            </h1>
            <p className="text-white text-2xl">
              <span className="green">RealVibes</span> is a platform that is
              inspired by other black creatives and black entrepreneurs around
              the world. This is a place where genuine energy is connected and
              shared amongst people. Get inspired by fashion, music, and
              business. The pre-requisite is
              <span className="green"> RealVibes.</span>
            </p>
          </div>
          <div className="">
            <img src={logo} width={1000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
