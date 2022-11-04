import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axios";

export default function SingleSura() {
  //Getting Sura Number From Params
  const surahNumber = useParams().surahNumber;

  //Intitalizing Variables
  let [surah, setSurah] = useState([]);
  useEffect(() => {
    async function getSurah() {
      const result = await axiosInstance.get(`/surah/${surahNumber}`);
      setSurah(result.data.data);
    }
    getSurah();
  }, []);

  console.log(surah);
  return (
    <div>
      {surah?.ayahs.map((ayah) => (
        <h1 className="bg-golden my-2 font-jonota font-bold text-3xl p-3">
          {ayah.text}
        </h1>
      ))}
    </div>
  );
}
