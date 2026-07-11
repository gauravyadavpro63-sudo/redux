import React from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import stores from "./component/store"
import Counter from  "./component/increment"



function Main(){
  return(
    <>
    <Provider store={stores}>
    <Counter/>
    </Provider>
    </>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>)