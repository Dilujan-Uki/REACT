export default function Task(){
    const tableData=[
        {col1:'ID',col2:'Name',col3:'Age',col4:'Course',col5:'Grade'},
        {id:'1',name:'Maya',age:'21',course:'React',grade:'A'},
        {id:'2',name:'Arun',age:'22',course:'JavaScript',grade:'B'},
        {id:'3',name:'Meena',age:'20',course:'HTML & CSS',grade:'A'},
        {id:'4',name:'Ravi',age:'23',course:'Node.js',grade:'B+'},
        {id:'5',name:'Priya',age:'21',course:'Python',grade:'A-'},
        {id:'6',name:'Karthik',age:'22',course:'Java',grade:'B'},
        {id:'7',name:'Ananya',age:'20',course:'CSS & Boostrap',grade:'A'}
    ]
    return(
        <>
        <table border="2" style={{borderCollapse:'collapse',fontSize:'20px'}}>
            <tr>
                <th> {tableData[0].col1} </th>
                <th> {tableData[0].col2} </th>
                <th> {tableData[0].col3} </th>
                <th> {tableData[0].col4} </th>
                <th> {tableData[0].col5} </th>
            </tr>
            <tr>
                <td> {tableData[1].id} </td>
                <td> {tableData[1].name} </td>
                <td> {tableData[1].age} </td>
                <td> {tableData[1].course} </td>
                <td> {tableData[1].grade} </td>
            </tr>
            <tr>
                <td> {tableData[2].id} </td>
                <td> {tableData[2].name} </td>
                <td> {tableData[2].age} </td>
                <td> {tableData[2].course} </td>
                <td> {tableData[2].grade} </td>
            </tr>
            <tr>
                <td> {tableData[3].id} </td>
                <td> {tableData[3].name} </td>
                <td> {tableData[3].age} </td>
                <td> {tableData[3].course} </td>
                <td> {tableData[3].grade} </td>
            </tr>
            <tr>
                <td> {tableData[4].id} </td>
                <td> {tableData[4].name} </td>
                <td> {tableData[4].age} </td>
                <td> {tableData[4].course} </td>
                <td> {tableData[4].grade} </td>
            </tr>
            <tr>
                <td> {tableData[5].id} </td>
                <td> {tableData[5].name} </td>
                <td> {tableData[5].age} </td>
                <td> {tableData[5].course} </td>
                <td> {tableData[5].grade} </td>
            </tr>
            <tr>
                <td> {tableData[6].id} </td>
                <td> {tableData[6].name} </td>
                <td> {tableData[6].age} </td>
                <td> {tableData[6].course} </td>
                <td> {tableData[6].grade} </td>
            </tr>
            <tr>
                <td> {tableData[7].id} </td>
                <td> {tableData[7].name} </td>
                <td> {tableData[7].age} </td>
                <td> {tableData[7].course} </td>
                <td> {tableData[7].grade} </td>
            </tr>
        </table>
        </>
    )
}