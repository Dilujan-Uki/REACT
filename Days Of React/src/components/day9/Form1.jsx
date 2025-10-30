import { useState } from "react"
export default function Form(){
const[FirstName,setFirstname]=useState('');
const[LastName,setLastname]=useState('');
const[Email,setEmail]=useState('');
const[Gender,setGender]=useState('');
const[Address,setAddress]=useState('');
const[Comment,setComment]=useState('');
const[submitted,setSubmmited]=useState('');

let handelClick=(event)=>{
    event.preventDefault();
    const data={
      firstName:FirstName,
      lastNAme:LastName,
      email:Email,
      gender:Gender,
      address:Address,
      comment:Comment,
    }
    setSubmmited(data);
}
    return(
        <>
        <div   style={{width:'900px', marginLeft:'100mm', background:'#cce3de',marginTop:'20mm' }}>
        <form style={{width:'800px', marginLeft:'10mm'}}>
            <label className="form-label m-2">FirstName:</label>
            <input className="form-control" type="text" value={FirstName} onChange={(event)=>setFirstname(event.target.value)}/><br /><br />
            <label className="form-label m-2">LastName:</label>
            <input className="form-control" type="text" value={LastName} onChange={(event)=>setLastname(event.target.value)}/><br /><br />
            <label className="form-label m-2">Email:</label>
            <input className="form-control" type="text" id="email" value={Email} onChange={(event)=>setEmail(event.target.value)}/><br /><br />
            <label>Gender:</label><br /> <br />
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="Gender" value={"Female"} onChange={(event)=>setGender(event.target.value)} />
            <label>Female</label>
            </div>
             <div class="form-check form-check-inline">
             <input className="form-check-input" type="radio" name="Gender" value={"Male"} onChange={(event)=>setGender(event.target.value)}/>
             <label>Male</label>
             </div><br /><br />
           
            <label htmlFor="inlineFormInput"  className="form-label m-2">Address:</label>
            <input className="form-control" type="text" value={Address} onChange={(event)=>setAddress(event.target.value)}/><br /><br />
            <label className="form-label m-2">Comment:</label>
             <textarea className="form-control" value={Comment} onChange={(event)=>setComment(event.target.value)}></textarea><br /><br />
             <button className="btn btn-success btn-lg" type="submit" onClick={event=>handelClick(event)}>Submit</button>
        </form>
        </div>
        

        {
            submitted &&(
                <>
                <table border={1} style={{marginLeft:'100mm',marginTop:'10mm'}} className="table table-bordered">
                    <tr>
                        <th className="bg-success">FirstName</th>
                        <th className="bg-success">LastName</th>
                        <th className="bg-success">Email</th>
                        <th className="bg-success">Gender</th>
                        <th className="bg-success">Address</th>
                        <th className="bg-success">Comment</th>
                    </tr>
                    <tr>
                        <td>{submitted.firstName}</td>
                        <td>{submitted.lastNAme}</td>
                        <td>{submitted.email}</td>
                        <td>{submitted.gender}</td>
                        <td>{submitted.address}</td>
                        <td>{submitted.comment}</td>
                    </tr>
 
                </table>
                </>
            )
        }
        </>
    )
}