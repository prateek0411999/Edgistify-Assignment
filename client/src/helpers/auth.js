import cookie from 'js-cookie';
import { json } from 'body-parser';
import { JsonWebTokenError } from 'jsonwebtoken';
import { rearg } from 'lodash';


//set in cookie
export const setCookie =(key,value) =>{
    if(window!== 'undefined'){
        cookie.set(key,value,{
            expires:1
            //will get expire after 1 day
        })
    }
}

//remove from cookie
export const removeCookie = key =>{
    if(window!== 'undefined'){
        cookie.remove(key,{
            expires:1
        })
    }
}


//getting the token from cookie 
//after this we'll store it in the localstorage
export const getCookie = key =>{
    if(window!=='undefined'){
        return cookie.get(key)
    }
}


//now setting it in local storage
export const setLocalStorage = (key,value) =>{
    console.log('value ka data');
    console.log(value);
    if(window!=='undefined'){
        localStorage.setItem(key,JSON.stringify(value))
    }
}
//removing it


export const removeLocalStorage = key =>{
    if(window!=='undefined'){
        localStorage.removeItem(key)
    }
}


//Authenticating after user login
export const authenticate =(res,next)=>{
    setCookie('token',res.data.token)
    setLocalStorage('user',res.data.user)
    next()

    
}


//signout
export const signout = (next)=>{
    removeCookie('token')
    removeLocalStorage('user')
}


//getting user info from the localstorage
export const isAuth = () => {
    if (window !== 'undefined') {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
          
                return (localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};

