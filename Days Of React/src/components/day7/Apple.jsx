import { useState,useEffect } from "react";

export default function State(){
    
    let [count,setcount]=useState(0);
    let handelClick=()=>{
        console.log(count);
        setcount(count+1);
    }
    
    useEffect(()=>{
                if(count>=5){
            alert ("Stop it you idiot");
        }
    },[count]);
    return(
        <>
        <button onClick={handelClick}>Click</button>
        <h1>The button was clicked {count}</h1>
        </>
    )
}