import React from "react";
import { Link } from "react-router-dom";

export default function Lessons() {
  return (
    <div className="min-h-screen bg-nav px-24 lg:px-48 py-20">
      <Link to="/learn-kayda" className="grid lg:grid-cols-4 grid-cols-1">
        <div className="border border-white rounded-md text-white hover:cursor-pointer hover:bg-black hover:mt-2 transition-all duration-300">
          <img
            src="/images/kayda_learn.png"
            className="lg:h-80 bg-white p-5 rounded-md"
            alt="learn-kayda"
          ></img>
          <div className="p-5 flex items-center justify-between">
            <p className="font-jonota lg:text-3xl text-xl">কায়দা শিখি</p>
            <p className="font-jonota lg:text-xl bg-white text-black px-1 rounded-sm">
              সময়ঃ ৩০ দিন
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
