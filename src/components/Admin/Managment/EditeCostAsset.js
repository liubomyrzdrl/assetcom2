import React,{useContext} from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {CompanyContext} from '../../../contexts/CompanyContext';
import Button from '@material-ui/core/Button';
import { Switch } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
  
  const EditeCostAsset=(props)=>{
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
      costassets: "",
      message: ''
       });

    const classes = useStyles();
    const {cstate,dispatch}=useContext(CompanyContext);

    const handleCostAsssets = costassets => event => {
      setValues({ ...values, [costassets]: event.target.value });
    };
    for(let i  in props){
 console.log("props"+ props[i]);
    }
    
    

    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
    
const onSaveChanges=()=>{
  ( async function Update (){
    const settings = {
      method: 'PUT',
      body: JSON.stringify({'costassets': values.costassets }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
}
};

   try{
const data= await fetch("/api/assets",settings);
let jdata =await data.json();
console.log("From PUt"+jdata); 
  for(let i in jdata){
console.log("UPDATE_COSTSASSET_COMPANY"+jdata[i])
  }
   
   dispatch({type :"UPDATE_COSTSASSET_COMPANY",payload:jdata})
setOpen(false);
 

}catch(err){
  console.log("Error"+err);
  
}
  
})()
}
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Змінити процентну ставку компанії 
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Змінити</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Змінити процентну ставку компанії .
            </DialogContentText>

            
           <form className={classes.container} noValidate autoComplete="off">
                  <TextField
                     id="outlined-name"
                     label="Процентна ставка"
                     className={classes.textField}
                     
                     onChange={handleCostAsssets('costassets')}
                     margin="normal"
                     variant="outlined"
                 />
               
        
             </form>
          
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Вийти
            </Button>
            <Button disabled={values.costassets===""} onClick={onSaveChanges} color="primary">
              Зберегти
            </Button>
            {}
          </DialogActions>
        </Dialog>
      </div>
    );
  }

export default EditeCostAsset 