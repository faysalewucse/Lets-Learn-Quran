import React from "react";

export default function Surah() {
  return (
    <div className="bg-nav p-5">
      {/* SearchBar */}
      <div className="flex justify-center items-center bg-golden rounded-md lg:w-2/5 w-3/4 mx-auto">
        <img src="icons/search.svg" alt="search" className="h-6 ml-2 w-6" />
        <input
          className="flex-shrink w-full bg-golden p-2 outline-none mx-auto placeholder-gray-700 font-jonota text-2xl"
          placeholder="সুরা খুজুন..."
        />
        <img
          src="icons/mic.svg"
          alt="mic"
          className="h-6 mr-2 w-6 opacity-50 hover:opacity-100"
        />
      </div>

      {/* Main Section */}
      <h1 className="text-white font-jonota text-center text-3xl mt-3">
        <span className="text-golden mr-2">সর্বশেষ</span>পড়েছেন
      </h1>

      {/* Last Read Surah */}
      <div className="flex gap-2 justify-center mt-4">
        <div className="border border-golden text-golden px-2 rounded-md font-jonota text-xl bg-navdark">
          সুরা মুলক
        </div>
        <div className="border border-golden text-golden px-2 rounded-md font-jonota text-xl bg-navdark">
          সুরা বাকারাহ
        </div>
        <div className="border border-golden text-golden px-2 rounded-md font-jonota text-xl bg-navdark">
          সুরা ওয়াকিয়াহ
        </div>
        <div className="border border-golden text-golden px-2 rounded-md font-jonota text-xl bg-navdark">
          সুরা নাবা
        </div>
      </div>
    </div>
  );
}
