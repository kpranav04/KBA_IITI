import './Login.css';
// import logo from '../images/loglogo.png'
import { useContext, useState } from "react";
// import { useHistory} from "react-router-dom";

import axios from 'axios';
import {AuthContext} from "../../hooks/context/AuthContext";
import Navbar from '../../components/navbar/navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
 
  const [isLoading, setIsLoading] = useState(false);
  // const navigate=useHistory(); 
  const { loading, error, dispatch, login } = useContext(AuthContext);

//  const navigate = useHistory();
 const [credentials, setCredentials] = useState({
  username: undefined,
  password: undefined,
});
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  
//  const notify=()=>{toast("Wow so easy!");};
  const handleClick = async (e) => {
     e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/auth/login", credentials);
    //   toast.success("Login Successfull", {
    //     position: toast.POSITION.TOP_CENTER
    // });
     console.log(res.data);
    // login(token, details);
    localStorage.setItem('jwtToken', res.data.token);

    if (res.data.isAdmin || !res.data.isAdmin) {
      // dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });

      // toast.success('Login Successful', { position: toast.POSITION.TOP_CENTER });
      
      // Delay navigation by 1 second to show loader
      // setTimeout(() => {
      //   setIsLoading(false);
        // navigate.push('/');
      // }, 1000);
      toast.success("Login Successfully");
      setTimeout(() => {
           window.location.reload(false);
      }, 1000);
 

    }  else {
    
       
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
          
        });
        toast("Unauthorized user");
        setTimeout(() => {
             window.location.reload(false);
        }, 1000);

      
      }
    } catch (err) {
    //   toast.error("User not found , Please try again", {
    //     position: toast.POSITION.TOP_CENTER
    // });
    console.log(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.res.data });
      toast("Unauthorized user");
      setTimeout(() => {
           window.location.reload(false);
      }, 1000);
    
    }
  };


  return (
    <>
    <ToastContainer position="top-center"/>
     
          <Navbar />
         {/* <div></div> */}
              {/* <input
                className='entry'
                type="text"
                required
                onChange={handleChange} placeholder='Username' id='username'
              />
              <input
                className='entry'
                type="password"
                required
                onChange={handleChange} placeholder='Password:' id='password'
              />
              <br /><br />

              <button  onClick={handleClick}><span style={{ textDecoration: "none" }}>Login </span></button> */}


             
              {/* <span style={{ fontSize: '13px' }}>Don't have an account? <a href="/Register">Sign up!</a></span> */}
              <form action="" class="form_main">
    <p class="heading">Login</p>
    <div class="inputContainer">
        <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
        </svg>
    <input type="text" class="inputField" placeholder="Username"  required
                onChange={handleChange} id='username'/>
    </div>
    
<div class="inputContainer">
    <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
    <input type="password" class="inputField" 
     required
     onChange={handleChange} placeholder='Password' id='password'/>
</div>
              
           
<button id="button" onClick={handleClick}>Submit</button>
    <a class="forgotLink" href="#">Forgot your password?</a>
</form>

         
        </>
      )}
   


 
export default Create;