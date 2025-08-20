import React from 'react'
import { Link } from 'react-router-dom'
const SingleCard = ({name, flag, population, region, capital, data, dark}) => {


  return (
    <div className={`group w-72 h-[400px] rounded-xl shadow-2xl ${dark ? "bg-gray-800 text-white" : "bg-white text-black"} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
      <Link className="country-card h-full w-full flex flex-col" to={`/${name}`} state={data}>
        <img src={flag} className='w-full h-[50%] group-hover:h-[45%] object-cover object-center transition-all duration-300' />
        <div className='flex flex-col h-1/2 w-full gap-y-1 py-2'>
        <h1 className='font-general-sans font-extrabold text-xl px-6 pt-5'>{name}</h1>
        <h3 className='font-general-sans font-medium px-12'>Population : {population}</h3>
        <h3 className='font-general-sans font-medium px-12'>Region : {region}</h3>
        <h3 className='font-general-sans font-medium px-12 whitespace-nowrap'>Capital : {capital}</h3>
        <div className='opacity-0 group-hover:block translate-y-1 group-hover:-translate-y-1 group-hover:opacity-100 transition-all duration-400 '>
                  <p className={` text-md font-bold font-general-sans px-6 pt-7 hover:underline ${dark ? "text-white" : "text-black"}`}>Learn more</p>
                </div>
        </div>
        

      </Link>
    </div>
  )
}

export default SingleCard
