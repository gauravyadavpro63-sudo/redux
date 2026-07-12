import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import stores from "./component/store"
import Counter from  "./component/increment"
import Customcounter from "./component/customcounter"


function Main(){

  return(
    <>
    <Provider store={stores}>
    <Counter/>
    <br />
    <br />
    <Customcounter/>
    </Provider>
    </>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>)  