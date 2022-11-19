import React from "react";
import { Link } from "react-router-dom";
import Surah from "./Surah";

export default function Home() {
  return (
    <div>
      <div className="bg-nav flex flex-col">
        <img
          className="lg:w-1/12 w-1/4 self-center mt-5"
          src="images/bismillah.png"
          alt=""
        />
        <h1 className="text-center mb-10 text-white font-jonota lg:text-2xl text-xl">
          বিসমিল্লাহির রহমানির রহীম
        </h1>
        <div className="flex lg:justify-center flex-col lg:flex-row self-center items-center lg:gap-56 gap-10 mb-20 lg:-mt-20">
          <div className="relative lg:w-1/3">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2  bg-[#F4C079] filter blur-3xl rounded-full opacity-50"></div>
            <img
              className="hidden lg:block lg:absolute w-1/2 opacity-25 lg:bottom-0 lg:left-0"
              src="images/arabicLetter.png"
              alt=""
            />
            <img className="relative" src="images/quran.png" alt="" />
          </div>
          <div className="text-white flex flex-col gap-5 lg:w-1/3 py-24 text-center lg:text-left lg:relative">
            <img
              className="hidden lg:block lg:absolute w-1/2 opacity-25 lg:top-0 lg:right-0 lg:mr-10"
              src="images/arabicLetter.png"
              alt=""
            />
            <h1 className="text-6xl font-jonota">চলো কুরআন শিখি</h1>
            <h6 className="lg:text-2xl text-xl w-3/4 mx-auto lg:mx-0">
              এটি হতে পারে আপনার জীবন পরিবর্তনের প্রথম ধাপ । আজ এখন থেকেই শুরু
              হয়ে যাক কুরআনের আলোয় আলোকিত হওয়া ।
            </h6>
            <Link
              to="/lessons"
              className="bg-golden lg:self-start self-center text-black text-center text-2xl lg:px-5 py-2 rounded-sm font-jonota w-1/4 hover:bg-goldenhover"
            >
              শুরু করুণ
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            className="float-right w-40 opacity-50 -mt-40 mb-5"
            src="images/caligraphy.png"
            alt="caligraphy"
          />
        </div>
      </div>

      <div>
        <hr className="h-1 bg-golden" />
        <Surah />
      </div>
    </div>
  );
}
