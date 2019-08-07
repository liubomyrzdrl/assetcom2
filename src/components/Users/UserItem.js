import React,{useContext} from 'react';
import DeleteUser from './DeleteUser';
import { makeStyles } from '@material-ui/core/styles';
// import './user.sass';
import './user.css';
import { UserContext } from '../../contexts/UserContext';
import DeleteIcon from '@material-ui/icons/Delete';
import { AuthContext } from '../../contexts/AutnContext';
 

const UserItem = (props) => {
const{usdata,dispatch}=  useContext(UserContext);
const {austate} = useContext(AuthContext);
 
 
    return (
<div className="item-block">
      

        
          <div className="user-name_block">
             <div className="user-name_title">Ім'я</div>
             <hr/>
             <h5>
                {props.first_name}
             </h5>
         </div>

         <div className="user-name_block">
            <div className="user-name_title">Прізвище</div>
             <hr/>
             <h5>
                {props.last_name}
             </h5> 
         </div>
         
          
       {austate.role === "admin"  && <div className="user-name_private">
                          
      <div className="user-name_prblock">
            <div className="user-name_prblock_title">
         
               <div className="user-name_ptitle">Ставка</div>
              
               <hr/>
            </div>
             <h5>
                 {props.salary}
             </h5> 
           </div>
           <div className="user-name_prblock">
             <div className="user-name_ptitle">Пакет_акцій</div>
             <hr/>
             <h5>
                 {props.assets_pack}
             </h5> 
          </div>
         
           </div>} 
         

{austate.role === "admin"&&      <div className="delete-cont">

      <DeleteUser id={props._id}/>
      </div>
    }
        
           
</div>
    )
}

export default UserItem


 