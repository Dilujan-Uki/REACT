import { useState } from "react"
export default function Form(){
const[userName,setUsername]=useState('');
const[submitted,setSubmmited]=useState('');
const handelChange=(event)=>{
    event.preventDefault();
    const data={
        name:userName,
    }
    console.log('name'+data.name);
    setSubmmited(data)
}



   


    return(
        <>
        <form>
            <label>Username(With setUsername)</label>
            <input type="text" value={userName} onChange={(event)=>setUsername(event.target.value)} /><br></br><br/>
            <label>Username (with console.log)</label>
            <input type="text" value={userName} onChange={(event)=>console.log(event.target.value)} /><br/>
            <button onClick={event=>handelChange(event)}>Submit</button>
        </form>

        {
            submitted &&(
                <h1> {submitted.name} </h1>
            )
        }
        </>
    )
}