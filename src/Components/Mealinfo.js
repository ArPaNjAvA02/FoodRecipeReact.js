import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Mealinfo() {
    const {mealid} =useParams();
    const [info,setinfo] = useState();


    const mealinfo = async() =>{
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsondata = await get.json();
        setinfo(jsondata.meals[0]);
    }
    if(info != ""){
        mealinfo();
    }
  return (
    <div>
        {!info ? "Data not found !" :
        <div className='mealInfo'>
           <img src={info.strMealThumb}/>
              <div className='info'>
                 <h1>Receipe Details</h1>
                 <button>{info.strMeal}</button>
                 <h3>Instructions</h3>
                 <p>{info.strInstructions}</p>
        </div>
    </div> }
        
    </div>
  )
}

export default Mealinfo