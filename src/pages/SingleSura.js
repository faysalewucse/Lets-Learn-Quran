import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import EngtoBanglaDigit from "../utils/EngToBanglaDigit";

export default function SingleSura() {
  //Getting Sura Number From Params
  const surahNumber = useParams().surahNumber;

  //Intitalizing Variables
  let [surah, setSurah] = useState([]);
  useEffect(() => {
    async function getSurah() {
      const result = await axios.get(`/surah/${surahNumber}`);
      setSurah(result.data.data);
      console.log(surah);
    }
    getSurah();
  }, [surahNumber, surah]);

  console.log(surah);
  return surah ? (
    <div className="p-5 bg-nav text-justify">
      {surah?.ayahs?.map((ayah, index) => (
        <p className="text-white inline my-2 font-arabic1 leading-relaxed text-3xl">
          {ayah.text}
          <span className="mx-2 w-10 h-10 font-jonota px-3 rounded-full text-center border border-white">
            {EngtoBanglaDigit(index + 1)}
          </span>
        </p>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
