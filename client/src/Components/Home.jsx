import React, { useState, useEffect, useLayoutEffect, Component } from 'react';
import { authenticate} from '../helpers/auth';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { isAuth, getCookie, signout } from '../helpers/auth'
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';




console.log("once");
const Home = (props) => {
  
  
  const [posts,setPosts] = useState([])
  
  useLayoutEffect(()=>{
   
    console.log('method called')
    
    axios.get('http://localhost:5000/api/home')
  .then((data)=>{
    console.log('AAGYYYYAAAAA');
    console.log(data);
    setPosts(data.data);
    
    // console.log(allPosts.data[0].post);
    // console.log(allPosts.data[0].posterEmail)
  }).catch((err)=>{

    console.log('no Data',err);
  })

    

  });


  // console.log(allPosts);
  console.log('}{}{}{}{}{')  
  let history1 = useHistory();
  

  
  const [value, setValue] = useState(props.name);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    

    const [value1,setValue1]=useState(props.name);
    const handleChange1 =(event)=>{
      setValue1(event.target.value);
    }

    const comment = e =>{
      e.preventDefault();
      console.log('in comment');
      axios.post('http://localhost:5000/api/posting',{

          
          by: email,
          comment: value1
        })
        .then((res)=>{
          if(res){
            console.log('commented');
          }else{
            console.log('something went wrong when posting comment')
          }
        })
      document.getElementById("area1").innerHTML="";

    };
    // let posterEmail= allPosts.data[0].posterEmail;
  
  let user= localStorage.getItem('user');
  //parsing the string into object
  let obj=JSON.parse(user);

  console.log('&&&&&&00',user);
  console.log(obj.email);
  
  let email=obj.email;
  const logOut =() =>{
    signout();
    console.log('its here');
    history1.push('/login');
  }

  const post =e =>{
    e.preventDefault();
    console.log('post called');
    console.log(value);

    const a={
      post: value,
      email: email,
      date:  Date(),
     

    };
    console.log(a);

     axios.post('http://localhost:5000/api/home',{
       post: value,
       email: email,
       date: Date()
     })
     .then((res)=>{
       console.log('This is the response we are getting::::::');
       console.log(res);
       if(res)
       {
         console.log("inserted");
       }else{
         console.log("not inserted");
       }
     })
     .catch(err =>{
       toast.error("Error Occured");
     })

     console.log('pushing home again');
     


  };

  const stoppedTyping =()=>{
    if(document.getElementById('area').value==="") { 
      document.getElementById('post').disabled = true; 
  } else { 
      document.getElementById('post').disabled = false;
  }
  };
  
  const stoppedTyping1 =()=>{
    if(document.getElementById('area1').value==="") { 
      document.getElementById('post1').disabled = true; 
  } else { 
      document.getElementById('post1').disabled = false;
  }
  };
  

 

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
          <textarea className="form-control"  value={value} onChange={handleChange} id="area" onKeyPress={stoppedTyping} aria-label="With textarea" placeholder="Share what's in your mind...."></textarea>
          </div><br></br>
          <div className="text-center">
          <button type="submit" className="btn btn-primary col-3" disabled onSubmit={post} id="post">Post</button>
          </div>
          </form> 
          <br/>
          
          <hr />
          <br />
          <div className="text-center">
          <h2 className="lead"> Drop Your Comments On Posts</h2>
          
          </div>
          <br/>
          <br/>
          <div className="bg-light clearfix">
          
              {
                
                posts.map(aa =>(
                  
                  <ul>
                  <div className="pull-left bold">
                  <p>Posted by :  </p>
                  </div>
                  <li key={aa._id}>{aa.posterEmail} <hr/> At {aa.timeStamp} </li>

                  
                  <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                      
                      <p>{aa.post}</p>
                    </div>
                  </div>
                  <div  className="w-50 h-7  px-md-6">
                  <textarea className="form-control"  value={value1} onChange={handleChange1} id="area1" onKeyPress={stoppedTyping1} aria-label="With textarea" placeholder="Share what's in your mind...."></textarea>
                  </div>
                  <div>
                  <button type="submit " className="btn btn-primary  col-2 px-md-40" disabled onSubmit={comment} id="post1">Comment</button>
                  </div>
                  <br></br> <hr/><br/>
                  
                  
                  </ul>
                  
               ))
              }
            </div>
          </div>
    
          );
      
    };
    export default Home;