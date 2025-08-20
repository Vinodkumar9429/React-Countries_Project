import ShimmerCard from './ShimmerCard';

const ShimmerCol = ({dark}) => {

  return (
    <div className={`w-screen ${dark ? "bg-gray-900" : "bg-white"} flex items-center justify-center lg:pr-16 pt-16 pr-12 md:pr-14 `} >
    <div className='min-h-screen w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-y-20'>
      {Array.from({length:9}).map((_, i) =>(
        <ShimmerCard key={i} dark={dark} />
      ))}
    </div>
    </div>
  )
}

export default ShimmerCol
