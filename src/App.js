import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/home/Home.jsx";
import "./styles/app.css";
import Profile from "./components/profile/Profile.jsx"
function App() {
  return ( 
    <div className="App">
      <Profile/>
      <Home/>

      
       {/*<div style={{height:"100vh",alignitem:'center',display:"flex"}}>
       <Register/>
  </div>*/}
    </div>
  );
}



export default App;
