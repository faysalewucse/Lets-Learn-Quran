import React from "react";

export default function Navbar() {
  return (
    <div className="text-white px-10 py-5 bg-[#000013f2] flex justify-between items-center">
      <h1 className="font-bold text-2xl">LLQ</h1>
      <div className="flex justify-between items-center gap-40">
        <ul className="flex justify-around gap-10 font-sandwip text-3xl">
          <li>হোম</li>
          <li>কুরআন পড়ুন</li>
          <li>কোর্স এক্সেস</li>
        </ul>
        <button className="bg-[#F4C079] text-black text-2xl px-10 py-2 rounded-sm font-jonota">
          লগিন
        </button>
      </div>
    </div>
  );
}
