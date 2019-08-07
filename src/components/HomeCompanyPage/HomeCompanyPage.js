import React,{useContext,useState} from 'react';
import { CompanyContext } from '../../contexts/CompanyContext';
import img from '../../image/market-share-468x258.jpg';  


  const  HomeCompanyPage=()=> {
   

    const{cstate}= useContext(CompanyContext);
  
 
    return (
        <div className="homepage-cont">
         <h1>Home page</h1>
         <div className="image">
         <img src={img}/>
         </div>
    
           
        </div>
    )
}
export default HomeCompanyPage

// <div>
//                 <div>{cstate.income}</div>
//                  <div>{cstate.costassets}</div>
//                  <div>{cstate.month_income}</div>
//           </div>