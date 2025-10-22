import { useState } from "react";
import Heart from '/home/uki-dsa-01/LESSONS/REACT/Days Of React/src/components/assets/heart.svg'

export default function State(){
    
    let [count,setCount]=useState(200);
    let handelClick1=()=>{
        console.log(count);
        setCount(count+50);
    } 
    let handelClick2=()=>{
        console.log(count);
        setCount(count-50)
    }
    return(
        <>
        <button style={{margin:'20px'}} onClick={handelClick1}>Like</button>
        <button  style={{margin:'20px'}} onClick={handelClick2}>Dislike</button>
        <img style={{width:count,position:'fixed'}} src={Heart} alt="" />
        </>
    )
}