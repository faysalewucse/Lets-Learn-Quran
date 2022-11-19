import React from "react";
import { useParams } from "react-router-dom";
import Day1 from "./Day1";

export default function Learnings() {
  //Getting dayNumber from url
  const dayNumber = useParams().dayNumber;
  return <div>{dayNumber === "1" && <Day1 />}</div>;
}
