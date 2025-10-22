export default function Day2(){
    const style={
        color:'pink',
        fontSize:'35px',
    }
    const dilujan1={
        color:'red',
        fontSize:'35px',
    }
     const dilujan2={
        color:'yellow',
        fontSize:'35px',
    }
     const dilujan3={
        color:'green',
        fontSize:'35px',
    }
     const dilujan4={
        color:'orange',
        fontSize:'35px',
    }
     const dilujan5={
        color:'brown',
        fontSize:'35px',
    }
    const main={
        container:{
            background:'#bde9fc',
            padding:'20px',
            borderRadius:'8px',
            textAlign:'center',
        },
        title:{
            color:'#236969',
            fontSize:'28px',
        },
        button:{
            background:'#236969',
            color:'black',
            border:'none',
            padding:'10px 20px',
            borderRadius:'6px',
            cursor:'pointer',
        },
    };
    return (
       <>
       <div style={{background:'#bde0fe',padding:'20px'}}>
        <h1 style={{display:'flex',justifyContent:'center',color:'blue'}}>Uki DreamSpace Academy</h1>
        <p style={{fontSize:'25px',margin:'50px',color:'#5a189a'}}>Course is FullStack Development</p>
        <p style={{fontSize:'25px',margin:'50px',color:'#5a189a'}}>Number of students are 9</p>
        <p style={{fontSize:'25px',margin:'50px',color:'#5a189a'}}>The subject is React</p> 
       </div>
       <p style={style}>Hellooooo</p>
       <p style={dilujan1}>Dilujan</p>
       <p style={dilujan2}>Dilujan</p>
       <p style={dilujan3}>Dilujan</p>
       <p style={dilujan4}>Dilujan</p>
       <p style={dilujan5}>Dilujan</p>
       <div style={main.container}>
        <h1 style={main.title}>Welcome to react</h1>
        <button style={main.button}>Click Me</button>
       </div>
     
       </>
    )
}