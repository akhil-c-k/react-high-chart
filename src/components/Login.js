 import React,{useState} from 'react'
 import { Redirect, Route } from 'react-router-dom'
 import history from "./common/History";
 import ErrorNotification from '../components/ErrorNotification'
 import './login.css'
 import Landing from './Landing'
 import PrivateRoute from './PrivateRoute'

const Login = (props) =>  {
    
    const { from } = props.location.state || { from: { pathname: '/' } }

    const [loggedIn,errorNotification] = useState(false)
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');

    const submitValue = (e) => 
     {
        const frmdetails = {
            'Name' : Name,
            'Password' : Password
        }

        const userName = localStorage.getItem("Username");
        const passWord  = localStorage.getItem("Password");
        
        const submittedName = frmdetails.Name;
        const submittedPassword = frmdetails.Password;
        console.log(submittedName == userName )
        console.log(submittedPassword == passWord)
        if((submittedName == userName && submittedPassword == passWord) == true) 
         {     
           localStorage.setItem("userLoggedin" , "true")
          history.push('/landing')
           return <Redirect to={from} />
         }
         else {
            errorNotification(true)
             history.push('/')
             
         }
     }
        return (
            <div className="login-outer-wrapper">
            {loggedIn ? <errorNotification loggedIn={loggedIn}/> : null}
               <form className="login-form-wrapper" >
                   <input className="input-box" name="user" type="text"  placeholder="username" onChange={e => setName(e.target.value)} />
                    <br/>
                   <input className="input-box" name="pass" type="text" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                   <button className="login-btn" onClick={submitValue}>Login</button>
               </form>
            </div>
        )
}

export default Login;
