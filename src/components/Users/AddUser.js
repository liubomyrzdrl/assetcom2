import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'; 
import { Switch } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
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
  
  const AddUser=(props)=>{
    const{usdata,dispatch}=  useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role:'',
        salary:'',
        assets_pack: ''
      });
     
      const currencies = [
        {
          value: 'admin',
          label: 'admin',
        },
        {
          value: 'regular',
          label: 'regular',
         
        },
         
      ];
          const currenciesSal = [
        {
          value: '1000',
          label: '1000',
        },
        {
          value: '2000',
          label: '2000',
         
        },
         
      ];
    const classes = useStyles();
  

    const handleChangeFirstName = first_name => event => {
      setValues({ ...values, [first_name]: event.target.value });
    };

    const handleChangeLastName = last_name => event => {
        setValues({ ...values, [last_name]: event.target.value });
      };
      
      const handleChangeEmail = email => event => {
        setValues({ ...values, [email]: event.target.value });
      
      };

      const handleChangePassword = password => event => {
        setValues({ ...values, [password]: event.target.value });
        
      };  
    

      const handleChangeSalary = salary => event => {
        setValues({ ...values, [salary]: event.target.value });
      };  
      const handleChangeRole = role => event => {
        setValues({ ...values, [role]: event.target.value });
      };  
    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
    React.useEffect(() => {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
      }, []);
    
 const onSaveChanges=()=>{
    ( async function UpdateCompanyIncome (){
        //first
        const settingsC = {
          method: 'POST',
          body: JSON.stringify({
            first_name: values.first_name,
            last_name:  values.last_name,
            email: values.email,
            password:  values.password,
            role:values.role,
            salary:values.salary,
            assets_pack: 0
    
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
    }
    };
    
       try{
    const cdata= await fetch('/api/users/',settingsC);
    let cjdata =await cdata.json();
    console.log("From PUt"+cjdata); 
    dispatch({type:"ADD_USER", payload: cdata})
    setOpen(false);
    }catch(err){
      console.log("Error"+err);
        
    }
  
    // //second 
      
        try{
           
        const response = await fetch("/api/users");
        const data = await response.json();
        console.log("Users as"+ data);
         dispatch({type:"UPDATE_DATA_USERS", payload: data})
       
        }catch(err){
            console.log(err);
        }
      
    
      })()
         setValues(  values.first_name= " ", values.last_name= " ",values.email="",values.password==="");
         setOpen(false);
}
    return (
      <div className="add_block">
         
        <Icon className={clsx(classes.icon, 'fa fa-plus-circle')} color="action"  onClick={handleClickOpen} />
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Додати нового користувача</DialogTitle>
          <DialogContent>
                       
           <form className={classes.container} noValidate autoComplete="off">
           <TextField
                id="first-name"
                label="Ім'я"
                className={classes.textField}
                value={values.first_name}
                onChange={handleChangeFirstName('first_name')}
                margin="normal"
                      />
            <TextField
                id="last-name"
                label="Прізвище"
                className={classes.textField}
                value={values.last_name}
                onChange={handleChangeLastName('last_name')}
                margin="normal"
                      />
            <TextField
                      id="email"
                      label="email"
                      className={classes.textField}
                      value={values.email}
                      onChange={handleChangeEmail('email')}
                      margin="normal"
                        />    
            <TextField
                        id="password"
                        label="password"
                        className={classes.textField}
                        value={values.password}
                        onChange={handleChangePassword('password')}
                        margin="normal"
                          />  


           
                      
              <TextField
                      id="salary"
                      select
                      label=" "
                      className={classes.textField}
                      value={values.currency}
                      onChange={handleChangeSalary('salary')}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      helperText="Встановити ставку"
                      margin="normal"
                    >
                      {currenciesSal.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>     

                    <TextField
                      id="role"
                      select
                      label=" "
                      className={classes.textField}
                      value={values.currency}
                      onChange={handleChangeRole('role')}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      helperText="Встановити доступ"
                      margin="normal"
                    >
                      {currencies.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>        
            
        
             </form>
          
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Вийти
            </Button>
            <Button  disabled={values.first_name===''||values.last_name===''|| values.email===''|| values.password===''||values.role===''|| values.salary===''}  onClick={onSaveChanges} color="primary">
              Зберегти
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

export default AddUser 

 