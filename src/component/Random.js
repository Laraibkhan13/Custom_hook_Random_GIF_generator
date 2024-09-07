import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useRandomgif from '../hooks/useRandomgif';

const API_KEY=process.env.REACT_API;

const Random = () => {

    const{gif,loading,fetchData}=useRandomgif();

  return (
    <div className=' bg-green-400 w-1/2 flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className=' underline font-bold mt-[15px]'>RANDOM GIF</h1>

        {
            loading?(<Spinner/>):(<img src={gif}  width="450"></img>)
        }
        

        <button onClick={()=>fetchData()} className=' font-bold bg-slate-100 w-10/12 rounded-lg py-2 mb-[15px]'>
            Generate
        </button>
    </div>
  );
}

export default Random