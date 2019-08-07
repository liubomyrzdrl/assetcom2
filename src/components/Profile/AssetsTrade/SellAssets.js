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
import { UserContext } from '../../../contexts/UserContext';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import minus from '../../../image/minus-128.png';
import './assets.sass';
//'/api/users/asses/:id'

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


const SellAssets = (props) => {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState(0);
  const [valstate, valState] = useState({
  isValid:true 
  });
  console.log("props.assets_pack"+props.assets_pack)
const{ustate,dispatch}= useContext(UserContext);
  const myref = useRef();
  const{cstate}= useContext(CompanyContext);
  const classes = useStyles();
  
  

const valueAssetsCompany =((cstate.income*cstate.costassets)/100);
const numSellAssets=Number(props.assets_pack)-state;
const valueSalaryRemoovefromstate = Number(props.salary)-(props.assets_pack* valueAssetsCompany);
 
 

 
 
 const changeValue =changeval=>e=>{
 console.log(e.target.value+myref.current.val);
//  if(valstate.isValid!=''){
//   valState({isValid:!valstate.isValid  });
//      }
     setState(e.target.value);
    }


 const onSaveChanges=()=>{
  console.log("Пропс код"+props.id);
   console.log("Пакет якийхоче продати працывник які  додати в assets_pack"+ numSellAssets+"СУма наяку трабезменшити salary"+ valueSalaryRemoovefromstate);
       ( async function UpdateCompanyIncome (){
      //first
      const settingsC = {
        method: 'PUT',
        body: JSON.stringify({
          'salary': valueSalaryRemoovefromstate,
          'assets_pack':  numSellAssets
  
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
 //dispatch({type :"GET_DATA_USERS",})
  setOpen(false);
  }catch(err){
    console.log("Error"+err);
      
  }

  //second 
    
      try{
         
      const response = await fetch("/api/users");
      const data = await response.json();
      console.log("Users as"+ data);
        dispatch({type:"UPDATE_DATA_USERS", payload: data})
     
      }catch(err){
          console.log(err);
      }
    
  
    })()
  }
 function handleClickOpen() {
  setOpen(true);
}

function handleClose() {
  setState(0);
  setOpen(false);
}
/// Counter logic
function handleClose() {
  setState(0);
  setOpen(false);
}
function minusFrom(){
  if(state===0) {
    setState(0)
  }else {
     setState(Number(state)-1)
  console.log('minus');
  }
 
}
function AddTo (){
  if(state===props.assets_pack){
    setState(Number(props.assets_pack))
  }else{
    setState(Number(state)+1)
  console.log('Add To');
  }

  
}


 
    return (
        <div className="buy-assets_block">
       


       <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Прадати  акції компанії 
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Змінити</DialogTitle>
          <DialogContent>
            <DialogContentText>
             Прадати  акції компанії 
            </DialogContentText>
           
            <DialogContent>
       
               <div>Акції працівника  {props.assets_pack-state}</div>
            </DialogContent>
           <form className={classes.container}   autoComplete="off">

           <div className="asset-counter_block"> 
           <Fab color="secondary" size="medium" aria-label="delete" className={classes.fab} onClick={minusFrom}>
           <div className="buyassets-minus_icon">
              <img src={minus} />
           </div> 
        </Fab>
                 <TextField
                  value={state.count}
                     ref={myref}
                     id="outlined-name"
                     label="Пакее акцій"
                     value={state}
                     className={classes.textField}
                     onChange={changeValue()}
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
 
export default SellAssets

// <div>Дохід працівника {(props.salary-(state*valueAssetsCompany).toFixed(2))}</div>
// <div>Треба додати до ставки{(state*valueAssetsCompany).toFixed(4)}</div>
// <div>Вартість однієї  акції {valueAssetsCompany}</div>
// <div>Ghjwtyn frwsq   {valueAssetsCompany}</div>

// <input value={state.count} onChange={changeValue} />