import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import useRandomgif from "../hooks/useRandomgif";

const Tag=()=>{
    
    const[tag,settag]=useState('');


    const{gif,loading,fetchData}=useRandomgif(tag);

    return (
        <div className=' bg-blue-400 w-1/2 flex flex-col items-center gap-y-5 mt-[15px]'>
    
            <h1 className=' underline font-bold mt-[15px]'>RANDOM GIF</h1>
    
            {
                loading?(<Spinner/>):(<img src={gif}  width="450"></img>)
            }
            
            <input className=" w-10/12 text-lg py-2 text-center"
             onChange={(event)=>settag(event.target.value)}
             value={tag}/>
    
            <button onClick={()=>fetchData(tag)} className=' font-bold bg-slate-100 w-10/12 rounded-lg py-2 mb-[15px]'>
                Generate
            </button>
        </div>
      );
}

export default Tag