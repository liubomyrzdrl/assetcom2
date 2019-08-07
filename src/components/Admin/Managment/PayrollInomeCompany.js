import React,{useContext} from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {CompanyContext} from '../../../contexts/CompanyContext';
import {UserContext} from '../../../contexts/UserContext';
import {StatisticContext} from '../../../contexts/StatisticContext';
import Button from '@material-ui/core/Button'; 
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

 const PayrollIncomeCompany=(props)=> {
   const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        updateStatistic:true,
       });

    const classes = useStyles();

    const {cstate,dispatch}=useContext(CompanyContext);
    const{usdata}    =           useContext(UserContext);
    const{ststate,stdispath }=  useContext(StatisticContext);
console.log("ddddd STatic "+props.salary);
const countSalary =(()=>{
    let count=0;
    for(let i in usdata){
      console.log("couddsfsdfsd"+Number(usdata[i].user_income)+1);
         count= Number(count)+Number(usdata[i].user_income);
    }
   return count
})();
console.log("couddsfsdfsd"+countSalary);
    
const updateStat =()=>{

 setValues({updateStatistic: !values.updateStatistic});
}
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
    console.log('Save Changes');
    setOpen(false);
 
// // Дохід комапанії - зарплати
  ( async function UpdateCompanyIncome (){
    //first
    const settingsC = {
      method: 'PUT',
      body: JSON.stringify({'income': (cstate.income -props.salary+3000).toFixed(2) }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
}
};

   try{
const cdata= await fetch("/api/assets/inincome",settingsC);
let cjdata =await cdata.json();
console.log("From PUt"+cjdata); 
dispatch({type :"UPDATE_INCOME_COMPANY",payload:cjdata})
setOpen(true);
}catch(err){
  console.log("Error"+err);
  
}
  // second 
  const settingsSt = {
    method: 'POST',
    body: JSON.stringify({
       "last_changes": new Date().toLocaleString().slice(0,10),
       "company_income": (cstate.income -props.salary+3000).toFixed(2),
       "user_income": props.salary
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
}
};

 try{
const sdata= await fetch("/api/stat",settingsSt);
let sjdata =await sdata.json();
for (let i in sjdata){
  console.log("From PUt"+sjdata[i]);
}
 
stdispath({type :"POST_STAT_DATA",payload:sjdata});
setOpen(false);
}catch(err){
console.log("Error"+err);

}

})()


 

}
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
           Розрахунок доходів компанії  
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title"> Розрахунок доходів компанії станом на {new Date().toLocaleString()}</DialogTitle>
        
   {values.updateStatistic?     <DialogContent>
          <DialogContent>    
                   
          <DialogContentText>Дохід команії </DialogContentText>  <DialogContentText style={{color:'red'}}>{Number(cstate.income)+3000}</DialogContentText>              
          <DialogContentText>   Видатки  команії на заробітну плану працівникам  </DialogContentText> <DialogContentText style={{color:'red'}}>{props.salary}</DialogContentText>   
          </DialogContent>
          
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Вийти
            </Button>
            <Button  onClick={updateStat} color="primary">
              Зберегти
            </Button>
          </DialogActions>
       </DialogContent>

       :
         <DialogContent>  
              <DialogContent>           
              <DialogContentText>  Зберегти дані в базу даних;  </DialogContentText>
                     <DialogContent>
                      <DialogContentText> 
                            Дахід компанії(Дохід- ЗП працівників) станом на {new Date().toLocaleString().slice(0,10)}
                      </DialogContentText> 
                      <DialogContentText style={{color:'red'}}> 
                          {(Number(cstate.income+3000) -  props.salary).toFixed(2)} 
                      </DialogContentText> 
                    </DialogContent>  
                    <DialogContent  >
                         <DialogContentText>Заробіна плата працівників станом на {new Date().toLocaleString().slice(0,10)} </DialogContentText> 
                         <DialogContentText style={{color:'red'}} >{ props.salary}  </DialogContentText>
                         </DialogContent>
                    </DialogContent>        
           
             <DialogContent>
                    <Button onClick={updateStat} color="primary">
                           Назад
                        </Button>
                        <Button onClick={handleClose} color="primary">
                           Вийти
                        </Button>
                     <Button  onClick={onSaveChanges} color="primary">
                            Зберегти всі зміни
                      </Button>
            </DialogContent>
          </DialogContent>
       }
          </Dialog>
      </div>
    );
}

export default PayrollIncomeCompany