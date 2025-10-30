import { useState,useEffect } from "react"
export default function Home1(){
    const[Username,setUsername]=useState('');
    const[Email,setEmail]=useState('');
    const[Comment,setComment]=useState('');
    let[Submit,setSubmmited]=useState('');

    let handelClick=(event)=>{
        event.preventDefault();
       const data={
        name:Username,
        email:Email,
        comment:Comment,
        submit:Submit,
       }
       setSubmmited(data);
       console.log(Submit);
       

    }
   
     useEffect(()=>{
        
            alert(`${Username}
                   ${Email}
                   ${Comment}`)
       },[Submit]);

    
    return(
        <><form>
       <label className="form-label m-2">Username: </label>
       <input type="text" className="form-control" value={Username} onChange={(event)=>setUsername(event.target.value)}/><br /><br />
       <label className="form-label m-2">Email</label>
       <input type="text" className="form-control" id="email" value={Email} onChange={(event)=>setEmail(event.target.value)} /><br /><br />
       <label className=" form-label m-2">Comment</label>
       <textarea className="form-control" placeholder="Write something..." value={Comment} onChange={(event)=>setComment(event.target.value)}></textarea><br /><br />
       <button type="submit" className="btn btn-info" onClick={event=>handelClick(event)}>Submit</button>
       </form>


     
        </>
    )
}