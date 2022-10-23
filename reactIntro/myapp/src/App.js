
import './App.css';

var obj="taruna"
var obj2=[{
  name:"Tinna",
  roll:9
},
{
  name:"Rajat",
  roll:1
},
{
  name:"Rahul",
  roll:2
}]
function App() {
  return (
    <div className="App">
     
     <p>{obj}</p>
     <div>{obj2.map((ele)=>{
      return(
        <div>
          <h1>Name : {ele.name}</h1>
          <h2>Roll No : {ele.roll}</h2>
        </div>
      )
     })}</div>
    </div>
  );
}

export default App;
