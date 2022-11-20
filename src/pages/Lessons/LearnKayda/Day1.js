import React from "react";
import { useState } from "react";
import { arabic_alpha } from "../../../data/arabicHorof";
import { Permutations } from "../../../utils/Permutations";

export default function Day1() {
  let alif = new Audio("/audios/alif.mp3");
  const horof = ["আলিফ", "বা", "তা", "ছা"];
  const [question, setQuestion] = useState(0);
  const [comment, setComment] = useState();
  const [options, setOptions] = useState([0, 1, 2, 3]);

  const play = () => {
    alif.play();
  };
  const changeQuestionHandler = () => {
    setQuestion(Math.floor(Math.random() * 4));
    setOptions(Permutations([0, 1, 2, 3])[Math.floor(Math.random() * 4)]);
    console.log(options);
  };
  function setCorrect() {
    setComment("Correct");
    changeQuestionHandler();
    setTimeout(() => {
      setComment();
    }, 1000);
  }
  return (
    <div className="bg-nav min-h-screen p-12 lg:px-48">
      <h1 className="text-white text-3xl font-jonota text-justify">
        আরবি হরফ <span className="text-golden">২৯ টি</span> । ইংরেজীতে যেমন
        Letter ২৬ টি বাঙ্গলায় যেমন ৫০ টি । তেমন আরবি অক্ষর যাকে আমরা{" "}
        <span className="text-golden">হরফ</span> বলি তা হচ্ছে মোট ২৯ টি । ১ম দিন
        আমরা এর মধ্যে ৪ টি হরফ শিখব ইন শা আল্লাহ।
      </h1>
      <div className="grid grid-cols-2 text-white mt-5 gap-5">
        <div className="text-3xl border border-golden text-center p-2 hover:bg-black hover:cursor-pointer transition-all duration-300">
          <h1 className="font-arabic1 text-6xl">ب</h1>
          <h1 className="font-sandwip">বা</h1>
        </div>
        <div
          className="text-3xl border border-golden text-center p-2 hover:bg-black hover:cursor-pointer transition-all duration-300"
          onClick={play}
        >
          <h1 className="font-arabic1 text-6xl">ا</h1>
          <h1 className="font-sandwip">আলিফ</h1>
        </div>
        <div className="text-3xl border border-golden text-center p-2 hover:bg-black hover:cursor-pointer transition-all duration-300">
          <h1 className="font-arabic1 text-6xl">ث</h1>
          <h1 className="font-sandwip">ছা</h1>
        </div>
        <div className="text-3xl border border-golden text-center p-2 hover:bg-black hover:cursor-pointer transition-all duration-300">
          <h1 className="font-arabic1 text-6xl">ت</h1>
          <h1 className="font-sandwip">তা</h1>
        </div>
      </div>
      <h1 className="text-white text-3xl font-jonota text-justify mt-5">
        এখানে প্রত্যেক হরফের নিচে <span className="text-golden">বাংলা </span>
        লিখা হয়েছে যা মুলত{" "}
        <span className="text-golden">দেখে পড়ার জন্য না</span> । সাধারন একটা
        ধারণা দেয়ার জন্য মাত্র, কারণ বাংলা দেখে হরফ এর সঠিক উচ্চারণ
        <span className="text-golden"> সম্ভব নয় ।</span>
      </h1>
      <h1 className="text-golden text-center font-sandwip text-4xl my-10">
        মজা করে হরফ শিখী
      </h1>
      <div className="border border-golden text-center">
        <h1 className="text-white font-jonota text-3xl mt-5">
          কোনটি {horof[question]}?
        </h1>
        {comment ? (
          <h1
            className={`inline-block px-5 py-2 rounded font-bold mt-5 ${
              comment === "Correct"
                ? "text-black bg-green-500"
                : "text-white bg-red-500"
            }`}
          >
            {comment}
          </h1>
        ) : null}
        <div className="flex justify-around my-5">
          {options.map((index) => {
            return (
              <h1
                onClick={() =>
                  index === question ? setCorrect() : setComment("Incorrect")
                }
                className="text-8xl font-arabic1 text-white hover:cursor-pointer hover:text-golden"
              >
                {arabic_alpha[index]}
              </h1>
            );
          })}
        </div>

        <div
          onClick={changeQuestionHandler}
          className="font-jonota  text-2xl bg-white hover:cursor-pointer mt-10 hover:bg-slate-200"
        >
          আবার
        </div>
      </div>
    </div>
  );
}
