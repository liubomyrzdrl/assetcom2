import React, {useState, createContext,useEffect} from 'react';
 

export const AuthContext =createContext();
 
 
const  AuthContextProvider =  (props) => {

    const[austate, setAuth]=useState(
    {  isAutentificated: false, 
        message:"",
        id:'',
        role:'',
        'salary':'',
        'assets_pack':''
    } 
    );

 const logOut =()=>{
    setAuth({isAutentificated: !austate.isAutentificated }); 
 }

   const getCredentionals=(email,password)=>{
    
        console.log('austate'+austate.isAutentificated);  
 
      ( async function fetchData (){
             const settings = {
        method: 'POST',
        body: JSON.stringify({email: email, password:password}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
     };
 const data= await fetch("/api/auth",settings);
 let jdata =await data.json();
  console.log("res status"+jdata.status) 
 console.log("res jdata"+jdata.message) 
 
      if(jdata.status==="err"){
   console.log("res message"+jdata.message) 
        setAuth({isAutentificated: false,message:jdata.message}); 
                   console.log("res sdfg"+austate.message) 

                   console.log("res austate"+austate.message) 

       
          }else{
              for(let i in jdata.data){
                     console.log("jdata.data.id"+jdata.data[i]);
              }
   
           
      setAuth({isAutentificated: !austate.isAutentificated, id:jdata.data.id,role: jdata.data.role }); 
      console.log("austate.id"+austate.id );
   

            }
            
    })()
    
    
}
    return (
        <AuthContext.Provider  value={{austate,  getCredentionals,logOut}}>
             {props.children}
        </AuthContext.Provider>
    )
}


export default  AuthContextProvider