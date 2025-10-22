import { useState } from "react";

export default function State(){
    let num=0
    num=10
    let num1=10
    let num2=20;
    let [count,setCount]=useState(0);
    let handelClick1=()=>{
        setCount(num1+num2)
       console.log(count);
    }
    let handelClick2=()=>{
        setCount(num1-num2)
        console.log(count);
    } 
    let handelClick3=()=>{
        setCount(num1*num2)
        console.log(count);
    }
    let handelClick4=()=>{
        setCount(num1/num2)
        console.log(count);
    }
    return(
        <>
        <button onClick={handelClick1}>Plus</button>
        <button onClick={handelClick2}>Substraction</button>
        <button onClick={handelClick3}>Multiply</button>
        <button onClick={handelClick4}>Divison</button>
        <h1>The of {num1},{num2} is {count} </h1>
        </>
    )
}