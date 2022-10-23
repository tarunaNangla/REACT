import Child from "./Child";

function Parent()
{
   const obj=[
    {
    roll:1,
    name:"Soni"
},{
    roll:1,
    name:"Soni"
}]

   return(
    <div>
      {obj.map((el)=>{
        return(<Child x={el.name} y={el.roll} />
               
        )
      })}
    </div>
   )
}

export default Parent;