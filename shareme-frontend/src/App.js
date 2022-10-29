import React from "react";
import { render } from "react-dom";
import {Routes,Route,useNavigate} from "react-router-dom";
import Login from "../components/Login";
import Home from "../container/Home";

const App = () =>{
  return(
      <Routes>
        <Route path="login" elements={<Login/>}/>
        <Route path="/*" elements={<Home/>}/>
      </Routes>
  )
};

export default App;