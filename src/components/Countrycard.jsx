import React, { useEffect, useState } from 'react'
// import contriesList from '../contriesList'
import SingleCard from './SingleCard'
import ShimmerCol from './ShimmerCol';

const Countrycard = ({query, dark}) => {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,subregion,tld,currencies,languages,borders")
    .then((data) => data.json())
    .then((data)=> {
      setCountriesList(data)})
    .catch((error)=>console.log(error))
  },[])

  if(countriesList.length === 0){
    return <ShimmerCol dark={dark} />
  }


  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-y-20 pt-10`}>

    {
        countriesList.filter((country)=>{
          return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query);
        }).map((country)=>{
          return <SingleCard 
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          data={country}
          dark={dark}
          
          />
        })
    
    }

    </div>
  )
}

export default Countrycard
