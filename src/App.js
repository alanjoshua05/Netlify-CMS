import React, { useEffect, useState } from "react";
import Research from "./Components/Research";
import Home from "./Components/Home";
import Members from "./Components/Members";
import Publication from "./Components/Publication";
import Jothi from "./Components/Jothi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Achivements from "./Components/Achivements";
import Gallery from "./Components/Gallery";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/members" element={<Members />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/jothi" element={<Jothi />} />
          <Route path="/achievements" element={<Achivements />} />
          <Route path="/gallary" element={<Gallery/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
