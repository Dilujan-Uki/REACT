import { useState,useEffect } from "react";
import Sun from '/home/uki-dsa-01/LESSONS/REACT/Days Of React/src/components/assets/sun.svg'
import Heart from '/home/uki-dsa-01/LESSONS/REACT/Days Of React/src/components/assets/heart.svg'
import Moon from '/home/uki-dsa-01/LESSONS/REACT/Days Of React/src/components/assets/moon.svg'
import Star from '/home/uki-dsa-01/LESSONS/REACT/Days Of React/src/components/assets/star.svg'

export default function State(){

    const img={
        width:'200px',
        hieght:'200px',
    }

    let [count1,setcount1]=useState(0);
    let handelClick1=()=>{
        console.log(count1);
        setcount1(count1+1);
    }
    let [count2,setcount2]=useState(0);
    let handelClick2=()=>{
        console.log(count2);
        setcount2(count2+1);
    }
    let [count3,setcount3]=useState(0);
    let handelClick3=()=>{
        console.log(count3);
        setcount3(count3+1);
    }
    let [count4,setcount4]=useState(0);
    let handelClick4=()=>{
        console.log(count4);
        setcount4(count4+1);
    }
    
    useEffect(()=>{
                if(count1>=4){
            alert ("You exceed the time of clickin the Sun");
        }
    },[count1]);

     useEffect(()=>{
                if(count2>=2){
            alert ("You exceed the time of clickin the Moon");
        }
    },[count2]);

     useEffect(()=>{
                if(count3>=3){
            alert ("You exceed the time of clickin the Star");
        }
    },[count3]);

     useEffect(()=>{
                if(count4>=5){
            alert ("You exceed the time of clickin the Heart");
        }
    },[count4]);
    return(
        <>
        <button onClick={handelClick1}><img style={img} src={Sun} alt="Sun" /></button>
        <button onClick={handelClick2}><img style={img} src={Moon} alt="Moon" /></button>
        <button onClick={handelClick3}><img style={img} src={Star} alt="Star" /></button>
        <button onClick={handelClick4}><img style={img} src={Heart} alt="Heart" /></button>
        </>
    )
}