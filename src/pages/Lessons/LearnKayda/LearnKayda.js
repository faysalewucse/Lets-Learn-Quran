import React from "react";
import { Link } from "react-router-dom";
import EngtoBanglaDigit from "../../../utils/EngToBanglaDigit";

export default function LearnKayda() {
  return (
    <div className="min-h-screen bg-nav lg:px-48 px-12 py-20">
      <div className="grid lg:grid-cols-6 grid-cols-2 lg:gap-10 gap-5">
        {Array.from(Array(30).keys()).map((day) => (
          <Link
            to={`day/${day + 1}`}
            className="border border-golden font-jonota text-white text-3xl p-2 text-center hover:bg-black hover:cursor-pointer rounded-md"
          >
            {EngtoBanglaDigit(day + 1)}
            {day === 0
              ? "ম"
              : day === 1
              ? "য়"
              : day === 2
              ? "য়"
              : day === 3
              ? "র্থ"
              : day === 4
              ? "ম"
              : day === 5
              ? "ষ্ঠ"
              : day === 6
              ? "ম"
              : day === 7
              ? "ম"
              : day === 8
              ? "ম"
              : day === 9
              ? "ম"
              : "তম"}
            {"  দিন"}
          </Link>
        ))}
      </div>
    </div>
  );
}
