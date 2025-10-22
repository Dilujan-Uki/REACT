export default function Day4(){
    const flower={
        name :'rose',
        count : '40'
    }
    const array=[
        {name:'Lily',count:'20'},
        {name:'Hibiscus',count:'30'},
        {name:'Daisy',count:'40'}
    ]
    return(
        <>
        <h1>This is a {flower.name}</h1>
        <h1>There are {flower.count} flowers in the field</h1>
        <h1>This is a {array[0].name} </h1>
        <h1>There are {array[0].count} in the field</h1>
        <h1>This is a {array[1].name} </h1>
        <h1>There are {array[1].count} in the field </h1>
        <h1>This is a {array[2].name} </h1>
        <h1>There are {array[2].count} in the field </h1>
        </>
    )
}