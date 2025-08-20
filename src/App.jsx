import React, { useContext, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CountryPage from "./components/CountryPage";
import {ThemeContext} from "./contexts/ThemeContext";
const App = () => {

  const [dark, setDark] = useState((JSON.parse(localStorage.getItem("darkmode"))) || false);
  const res = useContext(ThemeContext);
  console.log(res)
  
  return (
    <BrowserRouter>
    <ThemeContext.Provider value={dark}>
    <div className={`h-screen w-screen flex flex-col items-center`}>
      <div className="flex justify-center mr-2">
        <Header dark={dark} setDark={setDark} />
      </div>
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="contact" element={<h1>This is the contact page.</h1>} />
        <Route path="/:country" element={<CountryPage dark={dark} />} />
      </Routes>
    </div>
    </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
