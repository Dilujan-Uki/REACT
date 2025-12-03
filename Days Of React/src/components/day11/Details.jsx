import { useEffect, useState } from "react";

export default function Details() {
  const [counts, setCounts] = useState({ count1: 1, count2: 1, count3: 1, count4: 1 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts((prev) => ({
        count1: prev.count1 < 10 ? prev.count1 + 1 : 10,
        count2: prev.count2 < 5 ? prev.count2 + 1 : 5,
        count3: prev.count3 < 200 ? prev.count3 + 1 : 200,
        count4: prev.count4 < 12 ? prev.count4 + 1 : 12,
      }));
    }, 60);
    return () => clearTimeout(timer);
  }, [counts]);

  const main={
    main1:{
        display:'flex',
        justifyContent:'center'
    },
    number:{
        color:'Orange',
    },
    box:{
        width:'200px',
        height:'100px',
        border:'2px solid rgba(255, 120, 0, 0.5) ',
        boxShadow:'  0 0 15px rgba(255, 120, 0, 0.5)',
        borderRadius:'15px',
        fontWeight:'bold',
        backgroundColor:'rgb(255,120,0,0.15)',
        margin:'10px',
        padding:'40px',
        
        

    }
  }
  return (
   <>
   <div style={main.main1}>
   <div style={main.box}>
     <div style={main.number}>{counts.count1}</div>
     <div >Staff</div>
   </div>
   <div style={main.box}>
     <div style={main.number}>{counts.count2}</div>
     <div >Branches</div>
   </div>
<div style={main.box}>
     <div style={main.number}>{counts.count3}</div>
     <div >Customers</div>
   </div>
<div style={main.box}>
     <div style={main.number}>{counts.count4}</div>
     <div >Products</div>
   </div>


   </div>
   </>
  );
}
