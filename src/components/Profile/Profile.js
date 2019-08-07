import React, { Component, useState,useEffect,useContext } from 'react'
import ProfileItem from './ProfileItem';
import { AuthContext } from '../../contexts/AutnContext';
import { UserContext } from '../../contexts/UserContext';
import BuyAssets from './AssetsTrade/BuyAssets';
import './prof.sass' 
import Paper from '@material-ui/core/Paper';
import SellAssets from './AssetsTrade/SellAssets';
import './prof.sass'
 

const Profile = () => {

// const[prstate, setProf]= useState([]);
// const[profstate, setProfState]= useState({
//   first_name:'',
//   last_name:' ',
//   salary: '',
//   assets_pack:''||0,
  
// });
const {austate} = useContext(AuthContext);
const {usdata} = useContext(UserContext);
  // useEffect( () => {     
         
  //   const fetchData=async ()=> {
         
         
  //    // You can await here
  //    try{
        
  //    const response = await fetch(`/api/users/${austate.id}`);
  //    const data = await response.json();
  //    console.log("Stat as"+ data);
  //    //  stdispatch({type:"GET_STAT_DATA", payload: data})
  //    setProf(data);
  //    }catch(err){
  //        console.log(err);
  //    }
  //  }
  //    fetchData();
     
  // },[])



const empl =usdata.filter((item,key)=>{
  return item._id ===austate.id
});



let first_name=null;
let last_name=null;
let salary=null;
let assets_pack=null;

for(let i in empl){
  
   first_name= empl[i].first_name;
   last_name= empl[i].last_name;
   salary= empl[i].salary;
   assets_pack= empl[i].assets_pack;
  
}
 

     return (
      
         <div className="profile-cont">
             <div className="profile-cont_inf">
                    <div className="profile-cont_names">
                          <div className="profile-cont_fname"> {first_name} {last_name}</div>
                          
                      </div>
                    
                    <div className="profile-cont_assets">
                      <div>Пакет акцій</div>
                      <div className="profile-cont_comer">  {assets_pack} </div>
                    </div>
                    <div className="profile-cont_salary">
                        <div> Зарплата</div>
                        <div  className="profile-cont_comer"> {salary}</div> 
                      </div>
                 </div>
                 
                 <div className="comer-block">
                      <BuyAssets className="comer-block_a"  assets_pack={assets_pack} id={austate.id} salary={salary} />
                      <SellAssets className="comer-block_s" assets_pack={assets_pack} id={austate.id} salary={salary}/>
                </div>
        </div>
     )
  
 }
 

 
 

   export default Profile
