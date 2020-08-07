import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import App from './App';
import Register from './Components/Register';
import Activate from './Components/Activate';
import Login from './Components/Login';
import Home from './Components/Home';

import PrivateRoute from './Routes/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  
   <BrowserRouter>
   <Switch>
   <Route path='/' exact render={props => <Login {...props} />} />
   <Route path='/login' exact render={props => <Login {...props} />} />
   <Route path='/register' exact render={props => <Register {...props} />} />
   <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
   
   <PrivateRoute path="/home" exact component={Home}  />
   
   </Switch>
   </BrowserRouter>,
  
  document.getElementById('root')
);

