import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { banglaName } from "../data/banglaName";
import axios from "../utils/axios";
import EngtoBanglaDigit from "../utils/EngToBanglaDigit";

export default function Surah() {
  //Initialize Variables
  const navigate = useNavigate();
  let [surahs, setSurahs] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedSection, setSelectedSection] = useState("sura");
  const smallNavStyle = "border-b-4";

  //Getting Surahs First Time
  useEffect(() => {
    async function getSurahs() {
      const result = await axios.get("/chapters?language=en");
      setSurahs(result.data.chapters);
    }
    getSurahs();
  }, []);

  //Functions
  const handleSmallNav = () => {
    setSelectedSection((prev) => {
      if (prev === "sura") {
        return "para";
      } else return "sura";
    });
  };

  const handleSurahsToShow = () => {
    setPage((prevPage) => {
      if (prevPage * 8 < 114) return prevPage + 1;
    });
  };
  return (
    <div className="bg-nav p-5">
      {/* SearchBar */}
      <div className="flex justify-center items-center bg-golden rounded-md lg:w-2/5 w-3/4 mx-auto lg:mt-10">
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

      {/* Small Navbar */}
      <div className="flex gap-5 mt-10 p-2 lg:px-48 text-white font-jonota text-xl cursor-pointer">
        <h1
          onClick={handleSmallNav}
          className={selectedSection === "sura" && smallNavStyle}
        >
          সুরা সমূহ
        </h1>
        <h1
          onClick={handleSmallNav}
          className={selectedSection === "para" ? smallNavStyle : ""}
        >
          পারা
        </h1>
      </div>
      {/* All Surahs */}
      {selectedSection === "sura" ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 p-2 lg:px-48 gap-3 mt-5">
          {surahs?.map((surah, index) => {
            if (index < page * 8) {
              return (
                <div
                  key={index}
                  onClick={() => navigate(`/surah/${surah.id}`)}
                  className="flex items-center gap-5 border border-golden p-4 rounded font-jonota lg:text-2xl hover:bg-black transition-all duration-300 cursor-pointer"
                >
                  <div className="bg-golden h-8 w-8 rotate-45">
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black -rotate-45">
                      {EngtoBanglaDigit(surah.id)}
                    </h1>
                  </div>
                  <div className="text-white">
                    <h1>
                      {banglaName[surah.id].name}
                      {"  "}( {surah.name_arabic} )
                    </h1>
                    <h1>{EngtoBanglaDigit(surah.verses_count)} টি আয়াত</h1>
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : null}
      <div className="text-golden flex justify-center gap-5 underline cursor-pointer">
        <p onClick={handleSurahsToShow}>See more...</p>
      </div>
    </div>
  );
}
