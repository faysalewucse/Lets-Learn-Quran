import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-scroll";
import axios from "../utils/axios";
import EngtoBanglaDigit from "../utils/EngToBanglaDigit";
import AudioPlayer from "../components/AudioPlayer";

export default function SingleSura() {
  window.scrollTo(0, 0);
  //Getting Sura Number From Params
  const surahNumber = useParams().surahNumber;

  //Intitalizing Variables
  let [ayahs, setAyahs] = useState([]);
  let [audioUrl, setAudioUrl] = useState("");
  const [selectedAyah, setSelectedAyah] = useState();

  //Event Handlers
  const scrollHandler = (ayahNumber) => {
    setSelectedAyah(ayahNumber);
  };

  useEffect(() => {
    async function getSurah() {
      const result = await axios.get(
        `quran/verses/indopak?chapter_number=${surahNumber}`
      );
      const { data } = await axios.get(`chapter_recitations/6/${surahNumber}`);
      setAudioUrl(data.audio_file.audio_url);
      setAyahs(result.data.verses);
    }
    getSurah();
  }, [surahNumber]);

  return (
    <div className="flex bg-nav min-h-screen">
      <div className="lg:block hidden text-justify w-2/12 text-3xl font-jonota mt-24 ml-5">
        <h1 className="text-golden text-center px-5">আয়াত নাম্বার</h1>
        {Array.from(Array(ayahs?.length).keys()).map((ayah) => (
          <Link
            to={ayah.toString()}
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
        <h1 className="text-white font-arabic3 text-5xl text-center mb-10 mt-5">
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
        </h1>
        <div className="lg:px-48 p-5">
          <AudioPlayer audioUrl={audioUrl} />

          <div className="py-5">
            {ayahs?.map((ayah, index) => (
              <p
                key={index}
                id={index}
                className={`group transition-all duration-200 cursor-pointer rounded-md pb-1 text-white hover:bg-golden hover:text-black px-2 inline my-2 font-arabic1 leading-loose text-3xl ${
                  index === selectedAyah && "bg-goldenhover rounded-lg"
                }`}
              >
                {ayah.text_indopak}
                <span className="mx-2 w-10 h-10 font-jonota px-3 rounded-full text-center border border-white group-hover:border-black">
                  {EngtoBanglaDigit(index + 1)}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
