import React from "react";

export default function Home() {
  return (
    <div className="bg-[#000013f2] p-10 flex flex-col">
      <img className="w-1/12 self-center" src="images/bismillah.png" alt="" />
      <div className="flex justify-center items-center gap-56 p-20">
        <img className="w-1/3" src="images/quran.png" alt="" />
        <div className="text-white flex flex-col gap-5 w-1/3">
          <h1 className="text-6xl font-jonota">চলো কুরআন শিখি</h1>
          <h6 className="text-2xl">
            এটি হতে পারে আপনার জীবন পরিবর্তনের প্রথম ধাপ । আজ এখন থেকেই শুরু হয়ে
            যাক কুরআনের আলোয় আলোকিত হওয়া ।
          </h6>
          <button className="bg-[#F4C079] text-black text-2xl px-5 py-2 rounded-sm font-jonota w-1/4">
            শুরু করুণ
          </button>
        </div>
      </div>
    </div>
  );
}
