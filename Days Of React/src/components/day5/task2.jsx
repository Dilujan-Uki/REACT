export default function Task2(props){
    const {data}=props
    const {name,color,about,table}=data
    return(
       <>
        {
            table.map((data1)=> <table> {data1} </table> )
          }
       </>

       
    )
}