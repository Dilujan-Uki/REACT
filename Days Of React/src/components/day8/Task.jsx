import { useState } from "react"
export default function Form2(){
const [Name,setName]=useState('');
const [Password,setPassword]=useState('');
const [Gender,setGender]=useState(''); 
const [submitted,setSubmmited]=useState('');
let handelClick=(event)=>{
    event.preventDefault();
    const data={
        name:Name,
        password:Password,
        gender:Gender

    }
    setSubmmited(data);
}  
 

    return(
        <>
        <form>
            <label>Name: </label>
            <input type="text" value={Name} onChange={(event)=>setName(event.target.value)} /><br /><br />
            <label>Password: </label>
            <input type="text" value={Password} onChange={(event)=>setPassword(event.target.value)}/><br /><br />
            <label>Male: </label>
            <input type="radio" name="Gender" value={"Male"} onChange={(event)=>setGender(event.target.value)} /><br /><br />
            <label>Female:</label>
            <input type="radio" name="Gender" value={"Female"} onChange={(event)=>setGender(event.target.value)} /><br /><br />
            <button input type="submit" onClick={event=>handelClick(event)}>Submit</button>
        </form>
        {
            submitted&&(
            <>
            <h2>{ submitted.name }</h2>
            <h2>{ submitted.password }</h2>
            <h2>{ submitted.gender }</h2>
            </>
            )
        }
        </>
    )
}