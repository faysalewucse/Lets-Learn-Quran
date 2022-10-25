import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Surah from "./pages/Surah";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <hr className="h-1 bg-golden" />
      <Surah />
    </div>
  );
}

export default App;
