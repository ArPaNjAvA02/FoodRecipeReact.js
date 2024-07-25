import React, { useState } from 'react'
import Mealcard from './Mealcard';

export default function Mainpage() {
  const[data,setdata] =useState();
  const[search , setsearch] =useState();
  const handleinput = (event) => {
        setsearch(event.target.value);
  }
  const myfun = async() =>{
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsondata = await get.json();
    setdata(jsondata.meals)
    console.log(jsondata.meals)
  }
 
  return (
    <>
    <div className='container'>
      <div className='searchbar'>
        <input type='text' placeholder='Enter type of  Dishe' onChange={handleinput}/>
        <button onClick={myfun}>Search</button>
      </div>

    </div>

    <div>
      <Mealcard detail={data}/>
    </div>
    
    </>
  )
}

