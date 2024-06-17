import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar/navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <div className="min-h-screen p-6 bg-zinc-100  text-gray-800 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/item-details/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
