import React, { useState,useEffect } from 'react';
import { authenticate} from '../helpers/auth';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { isAuth, getCookie, signout } from '../helpers/auth'
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";



const Home = () => {

  let user= localStorage.getItem('user');
  //parsing the string into object
  let obj=JSON.parse(user);

  console.log('&&&&&&00',user);
  console.log(obj.email);
 
  
  const logOut =() =>{
    signout();
    console.log('its here');
    history1.push('/login');
  }

  const post =e =>{
    e.preventDefault();
    console.log('post called');
    axios.post()
  
  }

  const stoppedTyping =()=>{
    if(document.getElementById('area').value==="") { 
      document.getElementById('post').disabled = true; 
  } else { 
      document.getElementById('post').disabled = false;
  }
  };
  

 let history1 = useHistory();

 const Action =()=>{
   
 }
    
      
  return(
    <div>

      <nav className="navbar navbar-light bg-light">
    
        <span className="navbar-text">
         Hello, {obj.name}
        </span>
        <button className="btn btn-primary " onClick={logOut}  >Log out</button>
      </nav>
       <hr/>
        <form onSubmit={post}>
          <div className="input-group">
            <div className="input-group-prepend">
            <span className="input-group-text">Create your Post </span>
          </div>
          <textarea className="form-control" id="area" onKeyPress={stoppedTyping} aria-label="With textarea" placeholder="Share what's in your mind...."></textarea>
          </div><br></br>
          <div className="text-center">
          <button type="submit" className="btn btn-primary" disabled onSubmit={post} id="post">Post</button>
          </div>
          </form> 
        
    </div>
          );
      
    };
    export default Home;