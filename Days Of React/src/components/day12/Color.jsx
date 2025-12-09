import { useState } from "react"
export default function Color(){
      const [boxColor, setBoxColor] = useState("white");
   
    return (
        <>
        <div style={{ padding: "20px" }}>
     
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button className="px-4 py-2 border border-green-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white" onClick={() => setBoxColor("red")}>Red</button>
        <button className="px-4 py-2 border border-green-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white" onClick={() => setBoxColor("blue")}>Blue</button>
        <button className="px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white" onClick={() => setBoxColor("green")}>Green</button>
        <button className="px-4 py-2 border border-green-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white" onClick={() => setBoxColor("orange")}>Orange</button>
        <button className="px-4 py-2 border border-green-500 text-purple-500 rounded-md hover:bg-purple-500 hover:text-white" onClick={() => setBoxColor("purple")}>Purple</button>
      </div>

      

      
      <div className="w-60 h-60 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 shadow-lg"
        style={{  backgroundColor: boxColor, }}
       
        
        
      ></div>
    </div>
        </>
    )
}