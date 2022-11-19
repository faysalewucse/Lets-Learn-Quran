import React from "react";

export default function Day1() {
  let alif = new Audio("/audios/alif.mp3");

  const play = () => {
    alif.play();
  };
  return (
    <div className="bg-nav min-h-screen p-12 lg:px-48">
      <h1 className="text-white text-3xl font-jonota text-justify">
        আরবি হরফ <span className="text-golden">২৯ টি</span> । ইংরেজীতে যেমন
        Letter ২৬ টি বাঙ্গলায় যেমন ৫০ টি । তেমন আরবি অক্ষর যাকে আমরা{" "}
        <span className="text-golden">হরফ</span> বলি তা হচ্ছে মোট ২৯ টি । ১ম দিন
        আমরা এর মধ্যে ৪ টি হরফ শিখব ইন শা আল্লাহ।
      </h1>
      <div className="grid grid-cols-2 text-white mt-5 gap-5">
        <div className="text-3xl border border-golden text-center p-2 hover:bg-black hover:cursor-pointer">
          <h1 className="font-arabic1 text-6xl">ب</h1>
          <h1 className="font-sandwip">বা</h1>
        </div>
        <div
          className="text-3xl border border-golden text-center p-2 hover:bg-black hover:cursor-pointer"
          onClick={play}
        >
          <h1 className="font-arabic1 text-6xl">ا</h1>
          <h1 className="font-sandwip">আলিফ</h1>
        </div>
        <div className="text-3xl border border-golden text-center p-2 hover:bg-black hover:cursor-pointer">
          <h1 className="font-arabic1 text-6xl">ث</h1>
          <h1 className="font-sandwip">ছা</h1>
        </div>
        <div className="text-3xl border border-golden text-center p-2 hover:bg-black hover:cursor-pointer">
          <h1 className="font-arabic1 text-6xl">ت</h1>
          <h1 className="font-sandwip">তা</h1>
        </div>
      </div>
      <h1 className="text-white text-3xl font-jonota text-justify mt-5">
        এখানে প্রত্যেক হরফের নিচে <span className="text-golden">বাংলা </span>
        লিখা হয়েছে যা মুলত{" "}
        <span className="text-golden">দেখে পড়ার জন্য না</span> । সাধারন একটা
        ধারণা দেয়ার জন্য মাত্র, কারণ বাংলা দেখে পড়লে হরফ এর সঠিক উচ্চারণ
        <span className="text-golden"> সম্ভব নয় ।</span>
      </h1>
    </div>
  );
}
