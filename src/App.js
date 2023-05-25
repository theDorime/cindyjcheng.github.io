<<<<<<< HEAD
import React, { useState } from 'react';

function App() {

  return (
    <div>
      <h1>Hey!</h1>
    </div>
  );
=======
import { Route, Routes } from "react-router-dom"
import { Home } from "./scripts/Home"
import { Gallery } from "./scripts/Gallery"
import { Portfolio } from "./scripts/Portfolio"
import { Game } from "./scripts/Game"
function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Game" element={<Game />} />
    </Routes>
  )
>>>>>>> game
}

export default App