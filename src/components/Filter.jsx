import React from 'react'

const Filter = ({setQuery, dark}) => {
  return (
      <select className={`shadow-lg w-3/6 md:w-1/6 px-4 py-2 rounded-2xl  ${dark ? "bg-gray-800 text-white" : "bg-white text-black border-2 border-zinc-100"} `} onChange={(e)=>setQuery(e.target.value)}>
        <option value="" disabled>Select Country</option>
        <option value="">None</option>
        <option value="asia">Asia</option>
        <option value="america">America</option>
        <option value="africa">Africa</option>
        <option value="europe">Europe</option>
        <option value="europe">Europe</option>
      </select>
  )
}

export default Filter
