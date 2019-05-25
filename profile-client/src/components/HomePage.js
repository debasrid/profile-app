import React, { Component } from 'react'
// import Signup from "./Signup";
// import Navbar from "./Navbar";
// import Login from "./Login";
// import Secret from "./Secret";
// import authService from './auth/AuthService';

// import { Switch, Route } from "react-router-dom";
// import AuthService from "./auth/AuthService";

export default class HomePage extends Component {
  state = {};
 render(){
     return(
         <div>
             <h1>Ironhack</h1>
             <p>Today we create this App</p>
             <button type="submit">Sign Up</button>
             <button type="submit">Log in</button>
         </div>
     );
 }

}