import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../utils/axios";
import EngtoBanglaDigit from "../utils/EngToBanglaDigit";

export default function Surah() {
  let [surahs, setSurahs] = useState([]);

  useEffect(() => {
    async function getSurahs() {
      const result = await axios.get("/surah");
      setSurahs(result.data.data);
    }
    getSurahs();
  }, []);

  console.log(surahs);
  return (
    <div className="bg-nav p-5">
      {/* SearchBar */}
      <div className="flex justify-center items-center bg-golden rounded-md lg:w-2/5 w-3/4 mx-auto mt-10">
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

      {/* All Surahs */}
      <div className="grid grid-cols-2 p-5 gap-3">
        {surahs?.map((surah) => {
          return (
            <div className="flex items-center gap-5 text-golden border border-golden p-4 rounded font-jonota text-xl">
              <div className="bg-golden h-8 w-8 rotate-45">
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black -rotate-45 font-bold">
                  {EngtoBanglaDigit(surah.number)}
                </h1>
              </div>
              <div>
                <h1>{surah.name}</h1>
                <h1>{surah.numberOfAyahs} টি আয়াত</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
