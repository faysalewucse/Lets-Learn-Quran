import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-scroll";

import axios from "../utils/axios";
import EngtoBanglaDigit from "../utils/EngToBanglaDigit";

export default function SingleSura() {
  //Getting Sura Number From Params
  const surahNumber = useParams().surahNumber;

  //Intitalizing Variables
  let [surah, setSurah] = useState([]);
  const [selectedAyah, setSelectedAyah] = useState();

  //Initialize Style

  //Event Handlers
  const scrollHandler = (ayahNumber) => {
    setSelectedAyah(ayahNumber);
  };

  useEffect(() => {
    async function getSurah() {
      const result = await axios.get(`/surah/${surahNumber}`);
      setSurah(result.data.data);
    }
    getSurah();
  }, [surahNumber, surah]);

  return (
    <div className="flex bg-nav min-h-screen">
      <div className="lg:block hidden text-justify w-2/12 text-3xl font-jonota mt-24 ml-5">
        <h1 className="text-golden text-center px-5">আয়াত নাম্বার</h1>
        {Array.from(Array(surah?.numberOfAyahs).keys()).map((ayah) => (
          <Link
            to={ayah}
            spy={true}
            smooth={true}
            offset={-300}
            duration={1000}
            key={ayah}
            onClick={() => scrollHandler(ayah)}
            className="inline-block mx-2 px-2 rounded-lg text-white cursor-pointer hover:bg-golden hover:text-black"
          >
            {EngtoBanglaDigit(ayah + 1)}
          </Link>
        ))}
      </div>
      <div id="AllAyahContainer" dir="rtl" className="text-justify lg:w-10/12">
        <h1 className="text-white font-arabic3 text-6xl text-center mb-10 mt-5">
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
        </h1>
        <div className="lg:px-48 p-5">
          {surah?.ayahs?.map((ayah, index) => (
            <p
              key={index}
              id={index}
              className={`text-white inline my-2 font-arabic1 leading-loose text-3xl ${
                index === selectedAyah && "bg-goldenhover rounded-lg"
              }`}
            >
              {index === 0
                ? ayah.text.split("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ")[1]
                : ayah.text}
              <span className="mx-2 w-10 h-10 font-jonota px-3 rounded-full text-center border border-white">
                {EngtoBanglaDigit(index + 1)}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
