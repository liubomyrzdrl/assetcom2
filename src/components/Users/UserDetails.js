import React,{useState,useEffect} from 'react'; 
 
import { makeStyles } from '@material-ui/core/styles';
// import './user.sass';
import './user.css';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));
  

const UserDetails= (props) => {
    const [udstate, setUdState] = useState([]);
    
 console.log("params", props.match.params.id);
 useEffect(() => {
    fetch(`/api/users/${props.match.params.id}`)
           .then((response)=>{
               console.log(response);
            return   response.json();
                })
           .then(data=>{
                
               
console.log("data"+data);
          setUdState([data]);
                             
           
           })     
           .catch((err)=>{
               console.log("I cant get data"+err);
           } )
   
 
},[] )
for(let i in udstate){
    console.log(i+" "+udstate[i]);
}
        
    return (
        <div className="user-details_block">
        <h3> User Deta</h3>
           {udstate.map((item,key)=>{
                return(
                    <div key={key}>
                           <div>{item.first_name} {item.last_name}</div> 
                           <div>  {item.role}</div> 
                    </div>
                )
           })}
        </div>
    )
}

export default UserDetails