import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const randomUrl=`YOUR_URL`;
// const tagUrl=`https://api.giphy.com/v1/gifs/random?api_key=mXA8ATh8OVu8V2QKCc2zfiNVZXfsPNSb&tag=${tag}`;

const useRandomgif = (tag) => {
    
    const[gif,setgif]=useState('');
    const[loading,setloadiing]=useState('false');

    async function fetchData(tag)
    {
        setloadiing(true);
        
        const {data}= await axios.get(tag ? `${randomUrl}&tag=${tag}` :randomUrl)
        const imagesource=data.data.images.downsized_large.url;
        console.log(imagesource)
        setgif(imagesource)
        setloadiing(false);
               
    }

    useEffect( ()=>{
        fetchData();
    },[] )

    return {gif,loading,fetchData};
}

export default useRandomgif