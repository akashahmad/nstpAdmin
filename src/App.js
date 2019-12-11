import React from 'react'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import LOGIN from './Container/login/login'
import Home from './Container/Homepage/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css'



export default()=>{
  return(
    <>
    <BrowserRouter>
        <Switch>
          <Router path={"/home"} component={Home}/>
          <Router path={"/login"} component={LOGIN}/>
        </Switch>
    </BrowserRouter>
     </>
     );
}