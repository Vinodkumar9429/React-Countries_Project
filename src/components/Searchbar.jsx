import React from 'react'

const Searchbar = ({setQuery, dark}) => {
  return (
    <div className='w-2/3 relative'>
        <i className={`ri-search-line absolute top-2 left-4 ${dark ? "text-white" : "text-black"}`} />
      <input type="text"  
      onChange={(e)=>setQuery(e.target.value.toLowerCase())}
      className={`pl-10 py-2 shadow-lg  w-full rounded-xl focus:outline-0 ${dark ? "bg-gray-800 text-white" : "bg-white text-black border-2 border-zinc-100"}`} 
      placeholder="Search"/>
    </div>
  )
}

export default Searchbar
