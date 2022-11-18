import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SingleSura from "./pages/SingleSura";
import Lessons from "./pages/Lessons";
import LearnKayda from "./pages/Lessons/LearnKayda/LearnKayda";
import Day from "./pages/Lessons/LearnKayda/Day";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="surah/:surahNumber" element={<SingleSura />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="learn-kayda" element={<LearnKayda />}>
            <Route path="day/:dayNumber" element={<Day />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
