import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const CountryPage = ({dark}) => {
  const pars = useParams();
  const {state} = useLocation();
  // console.log(state);
  const countryName = pars.country;

  const [countryData, setCountryData] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  
  function countryDataUpdater (data){

    setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString(),
          region: data.region,
          subregion: data.subregion,
          capital: data.capital?.[0],
          tld: data.tld?.[0],
          flag: data.flags.svg,
          currency: Object.values(data.currencies).map((acc)=>acc.name).join(", "),
          languages: Object.values(data.languages).map((acc)=>acc).join(", "),
          borders:[]
        })
        setLoading(false);
      
          // if(!data.borders){
          //   data.borders = [];
          // }

          Promise.all(data?.borders?.map((bord) =>{

          return fetch(`https://restcountries.com/v3.1/alpha/${bord}`)
            .then(data => data.json())
            .then(([data]) => data.name.common)}
        )).then(borders =>{
            setTimeout(()=>setCountryData((prev)=>({...prev, borders:borders})))
        }).catch(error => console.log(error))


  }

  useEffect(()=>{

    if(state){
      countryDataUpdater(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${(countryName)}`)
    .then((data)=> data.json())
    .then((data)=>{
        const [val] = data.filter(val => val.name.common === countryName);
        countryDataUpdater(val);
        

        

    })




    .catch(()=>{
      setNotFound(true)
      setLoading(false);    
    });



  },[state, countryName])

  


  if(notFound){
    return <div className={`my-70 text-lg md:text-xl lg:text-2xl font-general-sans text-red-600 ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`} >Country not found!</div>
  }
  if (loading) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-lg md:text-xl lg:text-2xl font-general-sans">Please wait</h1>
      <h1 className="text-lg md:text-xl lg:text-2xl font-general-sans">Loading...</h1>
    </div>
  );
}


  return (

    
    
    <div className={`min-h-screen w-screen flex flex-col items-center overflow-x-hidden ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="max-md:pt-30 md:pt-36 w-full h-full px-1 md:px-5 flex flex-col items-center md:justify-center">
            <button onClick={()=>history.back()} className={`px-8 pr-10 py-2 rounded-3xl absolute left-5 top-20 font-general-sans font-light text-sm md:text-lg cursor-pointer ${dark ? "bg-gray-800 shadow-md" : "shadow-gray-300 border-1 border-neutral-300 shadow-lg"}  hover:shadow-xl transition-shadow duration-300`}> <span><i className="ri-arrow-left-s-line"></i></span> back</button>
        <div className="md:max-w-[1200px] lg:w-full flex flex-col md:flex-row-reverse md:justify-between md:mb-6 box-border gap-y-5 md:gap-y-0 md:items-center md:gap-x-60">
          <img
            src={countryData.flag}
            className=" w-80 md:w-72 sm:w-96 sm:h-64 h-52 md:h-48 lg:w-md lg:h-72 object-cover object-center mx-auto sm:mx-0"
            alt=""
          />
          <div className="px-2 md:px-0 max-w-2xl " key={countryData.n}>
            <h1 className="font-general-sans font-bold text-2xl md:text-3xl md:mb-4 ">{countryData.name}</h1>
            <p className="font-general-sans font-medium text-md md:text-lg lg:text-xl leading-loose md:pl-5 pl-2">Native Name: <span className="pl-3">{countryData.nativeName}</span></p>
            <p className="font-general-sans font-medium text-md md:text-lg lg:text-xl leading-loose md:pl-5 pl-2">Population:<span className="pl-3">{countryData.population}</span></p>
            <p className="font-general-sans font-medium text-md md:text-lg lg:text-xl leading-loose md:pl-5 pl-2">Region:<span className="pl-3">{countryData.region}</span></p>
            <p className="font-general-sans font-medium text-md md:text-lg lg:text-xl leading-loose md:pl-5 pl-2">Sub Region:<span className="pl-3">{countryData.subregion}</span></p>
            <p className="font-general-sans font-medium text-md md:text-lg lg:text-xl leading-loose md:pl-5 pl-2">Capital:<span className="pl-3">{countryData.capital}</span></p>
            <p className="font-general-sans font-medium text-md md:text-lg lg:text-xl leading-loose md:pl-5 pl-2">Top Leve Domain:<span className="pl-3">{countryData.tld}</span></p>
            <p className="font-general-sans font-medium text-md md:text-lg lg:text-xl leading-loose md:pl-5 pl-2">Currency:<span className="pl-3">{countryData.currency}</span></p>
            <p className="font-general-sans font-medium text-md md:text-lg lg:text-xl leading-loose md:pl-5 pl-2">Languages:<span className="pl-3">{countryData.languages}</span></p>
            <div className="font-general-sans font-medium text-md md:text-lg lg:text-xl leading-loose md:pl-5 pl-2">Border Countries:<div className="pl-0">
              {countryData.borders && 
              <div className="flex flex-wrap gap-x-2 gap-y-2">
                {(countryData.borders.length !== 0) && countryData.borders.map(bord =>(<Link to={`/${bord}`} 
                key={bord}
                className={`px-5 py-1 rounded-xl ml-2 italic ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
                  {bord}</Link>))}
                  {(countryData.borders.length === 0) && <p className={`px-5 py-1 rounded-xl ml-2 italic ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>None</p>}
                </div>}
              </div></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CountryPage;
