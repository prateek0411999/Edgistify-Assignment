import React, { useState,useEffect } from 'react';
import { authenticate} from '../helpers/auth';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { isAuth, getCookie, signout } from '../helpers/auth'
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Home = () => {
  const location = useLocation();

  const logOut =() =>{
    signout();
    console.log('its here');
    history1.push('/login');
  }

  

  const stoppedTyping =()=>{
    if(document.getElementById('area').value==="") { 
      document.getElementById('post').disabled = true; 
  } else { 
      document.getElementById('post').disabled = false;
  }
  };
  let eid=location.state.detail.email;

  const post =(eid)=>{
    console.log(eid);
  }

  
  useEffect(() => {
    console.log(location.pathname); 
    
    console.log(location.state.detail);
 }, [location]);

 let history1 = useHistory();

 const Action =()=>{
   
 }
    // const handleLogout=props=>
    //   {
    //     signout();
    //     history1.push('/login');
    //   }
      
  return(
    <div>

      <nav className="navbar navbar-light bg-light">
        <span className="navbar-text">
         Hello, {eid}
        </span>
        <button className="btn btn-primary " onClick={logOut}  >Log out</button>
      </nav>
       <hr/>
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
            <span className="input-group-text">Create your Post </span>
          </div>
          <textarea className="form-control" id="area" onKeyPress={stoppedTyping} aria-label="With textarea" placeholder="Share what's in your mind...."></textarea>
          </div>
          <button className="btn btn-primary d-flex flex-row-reverse p-2" onClick={post} id="post">Post</button>
        </form> 
        
    </div>
          );
      
    };
    export default Home;