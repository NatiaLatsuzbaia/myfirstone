import React from "react";
import ReactDOM from "react-dom/client";
import Mysecondone from "./inxex2";

class Myfirstone extends React.Component{
    render(){
        return(
              
              <Mysecondone></Mysecondone>
          
        )
    }
}

var root = document.getElementById("root");

ReactDOM.createRoot(root).render(<Myfirstone></Myfirstone>);