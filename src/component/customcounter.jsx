import react,{ useState } from "react";
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "./slice1";


function Customcounter(){
      const [nvalue,setnvalue]=useState("")
      const dispatch=useDispatch();

      function handleclick(){
        dispatch(CustomIncreaser(Number(nvalue)))
        setnvalue("")
      }
      
    return(
        <>
        <input type="number"  value={nvalue} onChange={(event)=>setnvalue((event.target.value))}/>
        <button onClick={handleclick}>submit</button>
        </>
    )
}


export default Customcounter;