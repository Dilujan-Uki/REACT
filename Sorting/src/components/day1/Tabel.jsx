import { useState } from "react";
export default function Tabel(){
    const[sorted,setSorted]=useState(
    [
            {id:1, name:"Arun", marks:85,department:"Computer"},
            {id:2, name:"Meena", marks:92,department:"Electronics"},
            {id:3, name:"Suresh", marks:78,department:"Mechanical"},
            {id:4, name:"Divya", marks:88,department:"Civil"},
            {id:5, name:"Kishore", marks:95,department:"Computer"},
            {id:6, name:"Priya", marks:81,department:"Electronics"},
            {id:7, name:"Niramla", marks:89,department:"civil"},
        ]
    )
    const markSortingAs=()=>{
        const sorting=[...sorted].sort((a,b)=>a.marks-b.marks);
        setSorted(sorting);
    }
    const markSortingDs=()=>{
        const sorting=[...sorted].sort((a,b)=>b.marks-a.marks);
        setSorted(sorting);
    }
    const departmentSortingAS=()=>{
        const sorting=[...sorted].sort((a,b)=>a.department.localeCompare(b.department));
        setSorted(sorting);
    }
    const departmentSortingDS=()=>{
        const sorting=[...sorted].sort((a,b)=>b.department.localeCompare(a.department));
        setSorted(sorting);
    }
    return(

        <>
        <table className="table table-bordered">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Department</th>
            </tr>
        {
            sorted.map((item)=>
            (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.marks}</td>
                        <td>{item.department}</td>
                        
                    </tr>
       )) }
         <div className="btn btn-group">
                <button className="btn btn-item btn-info " type="submit" onClick={markSortingAs}>Marks by AS</button>
                <button className="btn btn-item btn-info " type=" submit" onClick={markSortingDs}>Marks by DS</button>
                <button className="btn btn-item btn-info " type="submit" onClick={departmentSortingAS}>Department by AS</button>
                <button className="btn btn-item btn-info " type=" submit" onClick={departmentSortingDS}>Department by DS</button>
            </div>
        </table>
        </>
    )
}