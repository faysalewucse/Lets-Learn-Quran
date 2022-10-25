import React from "react";

export default function Home() {
  return (
    <div className="bg-nav flex flex-col">
      <img
        className="lg:w-1/12 w-1/4 self-center mt-5"
        src="images/bismillah.png"
        alt=""
      />
      <h1 className="text-center mb-10 text-white font-jonota text-3xl">
        বিসমিল্লাহির রহমানির রহীম
      </h1>
      <div className="flex lg:justify-center flex-col lg:flex-row self-center items-center lg:gap-56 gap-10">
        <div className="relative lg:w-1/3">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2  bg-[#F4C079] filter blur-3xl rounded-full opacity-50"></div>
          <img className="relative" src="images/quran.png" alt="" />
        </div>
        <div className="text-white flex flex-col gap-5 lg:w-1/3 p-5 text-center lg:text-left">
          <h1 className="text-6xl font-jonota">চলো কুরআন শিখি</h1>
          <h6 className="lg:text-2xl text-xl w-3/4 mx-auto lg:mx-0">
            এটি হতে পারে আপনার জীবন পরিবর্তনের প্রথম ধাপ । আজ এখন থেকেই শুরু হয়ে
            যাক কুরআনের আলোয় আলোকিত হওয়া ।
          </h6>
          <button className="bg-golden lg:self-start self-center text-black text-2xl lg:px-5 py-2 rounded-sm font-jonota w-1/4 hover:bg-goldenhover">
            শুরু করুণ
          </button>
        </div>
      </div>
    </div>
  );
}
