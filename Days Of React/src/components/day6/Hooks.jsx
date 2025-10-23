import { useState } from "react";

export default function State(){
    let clicked =0;
    let [count,setCount]=useState(clicked);
    let handelClick=()=>{
        console.log(count);
        setCount(count+10);

    } 
    return(
        <>
        <button onClick={handelClick}>Click</button>
        <h1 style={{padding:`${count}px`}}>The Button was clicked {count} </h1>
        </>
    )
}