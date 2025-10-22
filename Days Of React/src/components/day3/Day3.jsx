import Car from '/home/uki-dsa-01/LESSONS/REACT/day3/src/assets/BlackCar.jpeg'
export default function Day3(){
    const main={
        body:{
          background:'Blue',
          display:'flex',
          flexContent:'spacebetween'

        },
        div1:{
         margin:'100px'
        

        },
        car:{
         width:'300px'
        },
       
        head:{
            fontSize:'40px',
            color:'white'
        },
        p:{
          color:'white'
        },
        button:{
            background:'Green',
            color:'white',
            border:'none',
            borderRadius:'3px',
            padding:'10px'
        },
        p1:{
            color:'white'
        }
    }
  
    return (
     <>
     <div style={main.body}>
         <div>
        <img style={main.car} src={Car} alt="" />
      </div>
      <div style={main.div1}>
        <h1 style={main.head}>Social is your superpower.</h1>
        <p style={main.p}>Easily manage all your media and get results with Hootsuite</p>
        <button style={main.button}>Start Your Free 30 Day Trail</button>
        <p style={main.p1}><u><b>Compare Plans</b></u></p>
      </div>
     </div>
     </>
    )
}