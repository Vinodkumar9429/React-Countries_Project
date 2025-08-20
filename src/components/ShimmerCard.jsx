import React from 'react'

const ShimmerCard = ({dark}) => {

  return (
    <div className={`w-72 h-[400px] rounded-xl shadow-2xl flex flex-col overflow-hidden ${dark ? "bg-gray-700":"bg-white"}`}>
        <div className='w-full h-[180px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse'></div>
        <div className={`w-full h-[220px] ${dark ? "bg-gray-800":"bg-white"} flex flex-col justify-center items-center gap-y-5`}>
            <div className='w-7/12 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl mr-16'></div>
            <div className='w-10/12 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl '></div>
            <div className='w-10/12 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl '></div>
        </div>
      
    </div>
  )
}

export default ShimmerCard
