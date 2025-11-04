import { useState } from "react";
export default function SearchFIllterExample(){
    const data =[
        {id:1, name:"Appel"},
        {id:2, name:"Banana"},
        {id:3, name:"Carrot"},
        {id:4, name:"Mango"},
    ]
    const [searchTerm,setsearchTerm]=useState("");

    const fillterredData=data.fillter((item)=>
      item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    return(

        <>
        <div>
            <h2>Search Fillter Example</h2>

            <input type="text" placeholder="Search by name.." value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} />
        </div>
        </>
    )
}