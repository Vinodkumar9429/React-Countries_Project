import React, { useContext, useState } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Countrycard from "./Countrycard";
import ShimmerCol from "./ShimmerCol";
import { ThemeContext } from "../contexts/ThemeContext";
const Home = () => {
  const dark = useContext(ThemeContext);
  const [query, setQuery] = useState("");
  return (
    <div
      className={`h-screen w-screen box-border flex flex-col items-center gap-y-4 overflow-x-hidden  relative ${dark ? "bg-gray-900 text white" : "bg-white text-black"}`}
    >
      <div className="w-full h-full px-6">
        <div className="flex flex-col gap-y-3 md:flex-row pt-40 justify-center gap-3">
          <Searchbar setQuery={setQuery} dark={dark} />

          <Filter setQuery={setQuery} dark={dark} />
        </div>

        <Countrycard query={query} dark={dark} />
      </div>
    </div>
  );
};

export default Home;
