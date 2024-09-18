import './xyz.css'
function Xyz(){
   return (
    <>
    <input type="time" id="myInput" value="Initial Text" onChange={(e)=>{console.log(e.target.value)}}></input>
    </>
   )
  
}
export default Xyz