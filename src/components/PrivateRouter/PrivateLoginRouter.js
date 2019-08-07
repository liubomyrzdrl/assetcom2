import React, { useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../../contexts/AutnContext';
 

 const  PrivateLoginRoute=({component: Component,...rest})=>{
     const{austate}=useContext(AuthContext);
     console.log("isAutentificated"+austate.isAutentificated);
    return (
        <Route {...rest}
             render={props=>!austate.isAutentificated ?(<Component {...props}/>):(
            <Redirect to={{pathname:"/profile"}}/>
        )

        }
        />

        
    )
}
export default PrivateLoginRoute