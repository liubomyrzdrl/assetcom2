import React,{useContext} from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 
 
import { UserContext } from '../../contexts/UserContext';

const useStyles = makeStyles(theme => ({

    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
      margin: theme.spacing(1),
    },
    root: {
      padding: theme.spacing(3, 2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));
  
  const DeleteUser=(props)=>{
    const{usdata,dispatch}=  useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        
      });
     
     console.log("DELEEETTE"+props.id);
         
    const classes = useStyles();
  

  
    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
     
    
 const onSaveChanges=()=>{
    ( async function UpdateCompanyIncome (){
        //first
        const settingsC = {
          method: 'DELETE',
          body: JSON.stringify({
            '_id':props.id,
              
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
    }
    };
    
       try{
    const cdata= await fetch(`/api/users/${props.id}`,settingsC);
    let cjdata =await cdata.json();
    console.log("From PUt"+cjdata); 
    dispatch({type:"ADD_USER", payload: cdata})
    setOpen(false);
    }catch(err){
      console.log("Error"+err);
        
    }
  
    // //second 
      
    //second 
    
    try{
         
        const response = await fetch("/api/users");
        const data = await response.json();
        console.log("Users as" );
          dispatch({type:"UPDATE_DATA_USERS", payload: data})
       
        }catch(err){
            console.log(err);
        }
      
    
      })()
}
    return (
      <div className="add_block">
      <DeleteIcon className={classes.icon} onClick={handleClickOpen}/>
         
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title"> Видалити користуваяа</DialogTitle>
          <DialogContent>
          
          
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Вийти
            </Button>
            <Button     onClick={onSaveChanges} color="primary">
              Зберегти
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

export default DeleteUser 