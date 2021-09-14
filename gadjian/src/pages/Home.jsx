import React from "react";
import hero from "../assets/hero.jpeg";

export default function Home() {
  return (
    <div className="h-full">
      <div className="h-screen ml-14 mt-3 mb-10 md:ml-64 bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto flex flex-col justify-center items-center">
        <img
          src={hero}
          alt="hero"
          width="300"
          height="250"
          className="flex flex-col justify-center items-center rounded-md"
        />
        <h1 className="mt-3 text-green-400 font-semibold leading-loose">
          welcome to our site
        </h1>
      </div>
    </div>
  );
}
