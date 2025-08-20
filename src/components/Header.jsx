import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = ({setDark}) => {
  const dark = useContext(ThemeContext);
  return (
    <nav
      className={`min-w-7xl h-20 py-5 fixed backdrop-blur-2xl flex justify-center sm:justify-evenly items-center px-4 sm:px-10 z-50 ${dark ? "bg-gradient-to-r from-black/70 via-gray-800/70 to-gray-900/70 text-white" : "bg-gradient-to-tr from-white/85 via-slate-50/85 to-gray-100/85 text-black"}  rounded-2xl gap-5`}
    >
      <div className="md:text-2xl font-light font-general-sans">
        <a href="/">Which Color Is Your Country ?</a>
      </div>
      <div
        className={`text-xl md:text-3xl flex justify-center items-center gap-3 px-3 py-1 rounded-full cursor-pointer ${dark ? "shadow-gray-600 shadow-lg border-1 border-neutral-700 bg-black" : "shadow-gray-300 border-1 border-neutral-300 shadow-lg bg-white"}`}
        onClick={()=>{
          setDark(!dark)
          localStorage.setItem("darkmode", !dark);  // we do this because setDark is a state updater function and they are asynchronous, so it goes to the WEBAPIs and waits, it doesn't just update rightaway, thus we provide !dark (same value) to setItem too.
        }}
      >

        
        {dark ? <>
          <i className="ri-sun-line text-amber-300 transition-all duration-300"></i>
          <p className="text-[17px] font-manrope hidden md:block font-medium ">Light Mode</p>
          </>
           : <>
          <i className="ri-moon-line transition-all duration-300"></i>
          <p className="text-[17px] font-manrope hidden md:block font-medium ">Dark Mode</p>
            </> }

        
      </div>
    </nav>
  );
};

export default Header;
