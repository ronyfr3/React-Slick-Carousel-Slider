import React,{useState,useEffect} from "react";
import { Circular  } from 'styled-loaders-react'

function Spinners() {
    const [loader,setLoader] = useState(true)

    useEffect(()=>{setLoader(true)},[])
    return (
        <div>
            {
                loader? <Circular /> :""
            }
        </div>
    )
}

export default Spinners
