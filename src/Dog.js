import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'

function Dog() {
    const[randomDog,setRandomDog]=useState("random")


  return (
    <div>
    <h1 className=''>Random Dog</h1>
    <label html for=""> </label>
    select Breeds:{""}
      <select name="Dogselect" onChange={(e)=>getDog(e)}>
        <option1  value={Random}> Random</option1>
        <option2  value={Beagle}> Beagle</option2>
        <option3  value={Boxer}> Boxer</option3>
        <option4  value={Dalmitiasn}>Dalmitiasn</option4>
        <option5  value={Husky}> Husky</option5>
      </select>
    </div>
  )
}

export default Dog
