import React,{useState,useContext} from 'react';
import './App.css';
import {Switch,Route,} from 'react-router-dom'
import HomeCompanyPage from './components/HomeCompanyPage/HomeCompanyPage';
import Menu from './components/Menu/Menu';
import AllUsers from './components/Users/AllUsers';
import UserDetails from './components/Users/UserDetails';
import { AuthContext } from './contexts/AutnContext';
import {UserContext} from './contexts/UserContext';

import Profile from './components/Profile/Profile';
import PrivateRoute from './components/PrivateRouter/PrivateLoginRouter';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';
import Statistic from './components/Admin/Statistic/Statistic';
import Managment from './components/Admin/Managment/Managment';
 

const App =()=>{
  const {austate} = useContext(AuthContext);
  const {usdata} = useContext(UserContext);

  return (
    <div className="App">
         <Menu/>
         <Switch>
                <Route  path="/" exact     component={HomeCompanyPage}/>
                {austate.isAutentificated &&    <Route  path="/users"      component={AllUsers}/>}
                <Route  path="/usersdetails/:id" render={props=> <UserDetails {...props}/>}/> />
                
              
                {austate.isAutentificated ? <Route path="/profile" component={Profile}/> : <Route  path="/" exact  render={props=> <HomeCompanyPage isLoading ={true}/> }/>}
                {austate.role === "admin"?                 
                <Switch>
                  <Route path="/admin" exact   component={Admin}/>
                
                </Switch>:             
                
                <Route  path="/" exact  render={props=> <HomeCompanyPage isLoading ={true}/> }/>}
              
                <PrivateRoute path="/login" component={Login}/>
                
              </Switch> 
         <Footer/>     
  </div>
  
  )
}
export default App
