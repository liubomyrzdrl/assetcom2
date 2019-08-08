import React, {useState ,useContext,useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { AuthContext } from '../../../contexts/AutnContext';
import { CompanyContext } from '../../../contexts/CompanyContext';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import minus from '../../../image/minus-128.png';
import { UserContext } from '../../../contexts/UserContext';
import './assets.sass';

 

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const BuySellAssets = (props) => {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState(props.assets_pack);
  const [valstatesalary, valState] = useState(props.salary);
const{ustate,dispatch}= useContext(UserContext);
 
  const{cstate}= useContext(CompanyContext);
  const classes = useStyles();
  
  

  const valueAssetsCompany =((cstate.income*cstate.costassets)/100);
  const currentValueSalary=(props.salary-(state*valueAssetsCompany).toFixed(4));



 const onSaveChanges=()=>{
  
       ( async function UpdateCompanyIncome (){
      //first
      const settingsC = {
        method: 'PUT',
        body: JSON.stringify({
          "salary": valstatesalary.toFixed(2),
          "assets_pack":  state
  
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
  }
  };
  
     try{
  const cdata= await fetch(`/api/users/asses/${props.id}`,settingsC);
  let cjdata =await cdata.json();
  console.log("From PUt"+cjdata); 
 
  setOpen(false);
  }catch(err){
    console.log("Error"+err);
      
  }

  //second 
    
      try{
         
      const response = await fetch("/api/users");
      const data = await response.json();

      for(let i in data){
         console.log("Users as"+ data[i].salary);
      }
     
        dispatch({type:"UPDATE_DATA_USERS", payload: data})
     
      }catch(err){
          console.log(err);
      }
    
  
    })()
  }
 function handleClickOpen() {
  setOpen(true);
}
/// Counter logic
function handleClose() {
 
  setOpen(false);
}
function minusFrom(){
  if(state===0  ) {
    setState(0)

  }else {
     setState(Number(state)-1)
  console.log('minus'+(valstatesalary-valueAssetsCompany).toFixed(4) );
  valState((valstatesalary-valueAssetsCompany)); 
  }
 
}
function AddTo (){
  if(currentValueSalary<=0){
 
 setState(Number(state))
  }else{
    setState(Number(state)+1)
    console.log('Add To'+(valstatesalary+valueAssetsCompany).toFixed(4));
    valState((valstatesalary+valueAssetsCompany)) 
  }
  
}


 
    return (
        <div className="buy-assets_block">
           
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Купити/Продати  акції компанії 
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Змінити</DialogTitle>
          <DialogContent>
            <DialogContentText> Купити/Продати  акції компанії.</DialogContentText>
           
            <DialogContent>
               <div>Дохід працівника {currentValueSalary.toFixed(2)} </div>
               <div>Ставка {valstatesalary.toFixed(2)}</div>
            </DialogContent>
           <form className={classes.container}   autoComplete="off">
          <div className="asset-counter_block">
                <Fab color="secondary" size="medium" aria-label="delete" className={classes.fab} onClick={minusFrom}>
                  <div className="buyassets-minus_icon">
                      <img src={minus} />
                  </div> 
                </Fab>
                        <TextField
                            id="outlined-name"
                            value={state}
                            label="Пакее акцій"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                  <Fab color="secondary" size="medium" aria-label="add" className={classes.fab} onClick={AddTo}>
                        <AddIcon />
                   </Fab>  
               </div> 
             </form>
          
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Вийти
            </Button>
            <Button    onClick={onSaveChanges} color="primary">
              Зберегти
            </Button>
          </DialogActions>
        </Dialog>

        </div>
    )
 
}
 
export default BuySellAssets

 
