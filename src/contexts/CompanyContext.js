import React ,{createContext, useState, useEffect,useReducer} from 'react';
import {CompanyReducer} from './reducers/companyReducer'
 
 
 export const CompanyContext =createContext();

const CompanyContextProvider = (props) => {
  const[cstate, dispatch] =  useReducer(CompanyReducer,[]);
 
     useEffect( () => {     
         
       const fetchData=async ()=> {
         try{
            const response = await fetch("/api/assets");
            const data = await response.json();
              dispatch({type:"GET_DATA_COMPANY", payload: data})
            
        }catch(err){
            console.log(err);
        }
      }
        fetchData();
        
     },[])
   
//  console.log(cstate);
      
  return (
        <div>
            <CompanyContext.Provider value={{cstate,dispatch}}>
                {props.children}
            </CompanyContext.Provider>
            
        </div>
    )
}

export default CompanyContextProvider