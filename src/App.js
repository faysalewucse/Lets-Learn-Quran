import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Surah from "./pages/Surah";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SingleSura from "./pages/SingleSura";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah/:surahNumber" element={<SingleSura />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
