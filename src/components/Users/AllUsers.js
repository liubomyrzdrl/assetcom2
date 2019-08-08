import React,{useState,useContext,useReducer} from 'react'
import { UserContext } from '../../contexts/UserContext';
import UserItem from './UserItem'; 
import './user.css'
import AddUser from './AddUser';
import { AuthContext } from '../../contexts/AutnContext';


const AllUsers = () => { 
  const{usdata}=  useContext(UserContext);
 const{austate}=  useContext(AuthContext);
 // const{edata,dispatch}=  useReducer(UserContext);
 console.log("EEdata"+usdata);
 const empl =usdata.map((item,key)=>{
      return <UserItem {...item}  key={key}/>
  });

 
    return (
       
        <div className="newsitem-container"> 
           {austate.role === "admin"&&  <div className="newsitem-container_content"><AddUser/><div className="newsitem-container_title"> Додати користувача</div></div> }
         <div className="user-container">
            {empl}  
         </div>
               
        </div>
      
 
    )
}

export default AllUsers