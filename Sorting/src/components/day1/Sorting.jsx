import { useState } from "react";

export default function SortandFilter(){
    const[sorted, setSorted]=useState(
        [
            {id:1, name:"Dilujan", age:21},
            {id:2, name:"Mukilan", age:22},
            {id:3, name:"Moumith", age:20},
            {id:4, name:"Thulekshan", age:23}
        ]
    )
    const idSortingAs=()=>{
        const sorting=[...sorted].sort((a,b)=>a.id-b.id);
        setSorted(sorting);
    }
    const idSortingDs=()=>{
        const sorting=[...sorted].sort((a,b)=>b.id-a.id);
        setSorted(sorting);
    }
    const ageSortingAs=()=>{
        const sorting=[...sorted].sort((a,b)=>a.age-b.age);
        setSorted(sorting);
    }
    const ageSortingDs=()=>{
        const sorting=[...sorted].sort((a,b)=>b.age-a.age);
        setSorted(sorting);
    }
    const nameSortingAs=()=>{
        const sorting=[...sorted].sort((a,b)=>a.name.localeCompare(b.name));
        setSorted(sorting);
    }
    const nameSortingDs=()=>{
        const sorting=[...sorted].sort((a,b)=>b.name.localeCompare(a.name));
        setSorted(sorting);
    }


    return(
        <>
        {
            sorted.map((item)=>
            (
                <div>
                    <span>ID:{item.id}</span>
                    <span>Name:{item.name}</span>
                    <span>Age:{item.age}</span>
                    <hr />
                </div>
            )) }
            <div className="btn btn-group">
                <button className="btn btn-item btn-info " type="submit" onClick={idSortingAs}>AS by ID</button>
                <button className="btn btn-item btn-info " type=" submit" onClick={idSortingDs}>DS bt ID</button>
                <button className="btn btn-item btn-info " type="submit" onClick={ageSortingAs}>AS by Age</button>
                <button className="btn btn-item btn-info " type=" submit" onClick={ageSortingDs}>DS by Age</button>
                <button className="btn btn-item btn-info " type="submit" onClick={nameSortingAs}>AS by Name</button>
                <button className="btn btn-item btn-info " type=" submit" onClick={nameSortingDs}>DS by Name</button>
            </div>
        </>
    )
}