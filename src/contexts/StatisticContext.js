import React ,{createContext, useState,useEffect,useReducer} from 'react'
import {statisticReducer} from './reducers/statisticReducer'; 

export const StatisticContext =createContext();

const StatisticContextProvider = (props) => {
   const[ststate, stdispath] =  useReducer(statisticReducer ,[]);

 
//console.log("Статист контекст"+ststate);
   useEffect(() => {
    fetch('/api/stat')
      .then(res=>{
        return res.json();
      })
      .then(data=>{ 
         stdispath({type:"GET_STAT_DATA", payload: data})
             })
       
  },[]);
//  console.log("StatisticContextProvider"+ ststate);
    return (
        <div>
            <StatisticContext.Provider value={{ststate, stdispath}}>
                {props.children}
            </StatisticContext.Provider>
            
        </div>
    )
}

export default StatisticContextProvider