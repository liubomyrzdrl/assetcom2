import React ,{createContext, useState,useEffect,useReducer} from 'react'
import {usersReducer} from './reducers/usersReducer';
export const UserContext =createContext();

const UserContextProvider = (props) => {
 
   const[usdata, dispatch] =  useReducer(usersReducer,[]);

   useEffect( () => {     
        const fetchData=async ()=> {
         try{            
            const response = await fetch("/api/users");
            const data = await response.json();
            dispatch({type:"GET_DATA_USERS", payload: data})
        
         }catch(err){
             console.log(err);
         }
       }
         fetchData();
         
      },[])


 
    return (
        <div>
            <UserContext.Provider value={{usdata,dispatch}}>
                {props.children}
            </UserContext.Provider>
            
        </div>
    )
}

export default UserContextProvider