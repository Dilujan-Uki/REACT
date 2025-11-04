import { useState } from "react"
export default function BMI(){
    const [formData,setFormData]=useState({
        kg:"",
        cm:""
    })
    const [bmiData,setBmiData]=useState();
    const [status,setStatus]=useState();
    let handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>({
            ...prevData,[name]:value
        }))
    }
    let handleSubmit=(e)=>{
        e.preventDefault();

        if(!formData.cm || !formData.kg){
            alert("Fill the label")
        }
        let bmi=formData.kg/(Math.pow(formData.cm,2)/100/100);
        setBmiData(bmi.toFixed(1));
        if(bmi<18.5){
            setStatus("Under Weight");
        }
        else if(bmi>18.5 && bmi<24.9){
            setStatus("Normal");
        }
        else if(bmi>24.9 && bmi<29.9){
            setStatus("Over Weight");
        }
        else if(bmi>29.9){
            setStatus("Obesity");
        }
        else{
            setStatus("Undifined");
        }
    }
    return(
        <form style={{height:"500px", width:"400px"}}>
        <h1 className="text-center">BMI Calculater</h1><br/>
        <label className="form-label">Weight (kg)</label>
        <input type="number" name="kg" className="form-control" onChange={handleChange} /><br/>
        <label className="form-label">Height (cm)</label>
        <input type="number" name="cm" className="form-control" onChange={handleChange} /><br/>
       <div  style={{display:'flex',justifyContent:'center'}}> <button type="submit" onClick={handleSubmit}>Submit</button></div>
        <div className="text-center">
            {bmiData &&(
                <>
            <p>Your BMI: {bmiData}</p>
            </>
            )
}
            {status &&(
                <p>Status: {status}</p>
            )
        }
        </div>
        </form>
    )
}