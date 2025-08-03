import React from 'react'
import "../style.css"
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

const HiddenSearchBar = () => {

    const[showinput,setShowInput]=useState(false)
    const[bgcolor,SetBgcolor]=useState('white');

    const handelclick=(e)=>{
        if(e.target.className=='container'){
            setShowInput(false)
            SetBgcolor('#ffffff')
        }
        else{
            setShowInput(true)
            SetBgcolor('#1b1b1b')
        }
    }

  return (
   <section className="container" style={{backgroundColor:bgcolor}} onClick={handelclick}>
    {showinput ? (
        <input type="text" placeholder='Search...' />
    ):(
        <FaSearch onClick={handelclick}/>
    )}

   </section>
  )
}

export default HiddenSearchBar
