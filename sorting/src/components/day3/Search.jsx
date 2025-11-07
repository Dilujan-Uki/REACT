import { useState } from "react";
export default function Search(){
    const data=[
        {id:1, name:"Apple", category:"Fruit", color:"Red", origin:"USA", taste:"Sweet", price:2},
        {id:2, name:"Carrot", category:"Vegetable", color:"Orange", origin:"India", taste:"Sweet", price:1},
        {id:3, name:"Banana", category:"Fruit", color:"Yellow", origin:"Sri Lanka", taste:"Sweet", price:1.5}
    ];
    const[searchTerm,setSearchTerm]=useState("")
    const filterData = data.filter((item)=> {
        const values = Object.values(item).join(" ").toLowerCase();
        return values.includes(searchTerm.toLowerCase());
    
    });

    const fileldNames = Object.keys(data[0])
   
    return(
      <>
      <div className="text-center">
        <h1>Global Search Across All Fields</h1><br />
      <div className="form-floating">
        <input type="text" className="form-control" placeholder="abcdr" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <label>Search here</label> <br />
      </div>
      <table className="table table-bordered">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Color</th>
            <th>Origin</th>
            <th>Taste</th>
            <th>Price</th>
        </tr>
        {/* {data.map((item)=>(
            <>
             <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.color}</td>
            <td>{item.origin}</td>
            <td>{item.taste}</td>
            <td>{item.price}</td>
        </tr>
            </>
        ))} */}
        {filterData.length > 0 ? (
            filterData.map((item, index)=> (
                <tr key={index}>
                    {fileldNames.map((field) => (
                        <td key={field}>{item[field]}</td>
                    ))}
                </tr>
            ))
        ):(
            <tr>
                <td colSpan={fileldNames.length}>No matching results found</td>
            </tr>
        )}

        
      </table>



      </div>
      </>
    )
}