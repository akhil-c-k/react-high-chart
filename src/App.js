import React,{Component} from 'react';
import { Router } from "react-router-dom";
import Routes from "./components/routes";
import Landing from './components/Landing'
import history from "./components/common/History";
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import PageNotfound from './components/PageNotfound'

import logo from './logo.svg';
import './App.css';

localStorage.setItem("Username","Akhil");
localStorage.setItem("Password","leo");

const appClass = localStorage.getItem("userLoggedin")

class App extends Component
  {    
  render() {
    return (
      <div className="App">
        <Router history = {history}>
           <Routes/> 
        </Router>
      </div>
    );
 }
}

export default App;
