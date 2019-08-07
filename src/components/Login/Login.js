import React, { Component,useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './form.css'
import { AuthContext } from '../../contexts/AutnContext';
 


const useStyles = makeStyles(theme => ({
 container: {
   display: 'flex',
   flexWrap: 'wrap',
   flexDirection: 'column',
   alignItems: 'center'
 },
 textField: {
   marginLeft: theme.spacing(1),
   marginRight: theme.spacing(1),
   width: 200,
 },
 dense: {
   marginTop: 19,
 },
 menu: {
   width: 200,
 },
}));


const Login=()=>{ 
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const {austate}=useContext(AuthContext);
  const{getCredentionals}= useContext(AuthContext);
    const classes = useStyles();
      
const handleEmail=email =>event=>{
  setValues({ ...values, [email]: event.target.value });
 
 };

 const handlePassword=password =>event=>{
  setValues({ ...values, [password]: event.target.value });
 
 };

  const handleButton=()=>{
  
 };

  const onSubData= event=>{
  event.preventDefault();
  
  setValues({ ...values, password: '',email:'' });
  getCredentionals(values.email,values.password);
 
}
        return (
            <div className="form-container">
                Login
                <form  className={classes.container} onSubmit={onSubData}> 
                
                        <TextField
                          required
                          id="email"
                          label="email"
                          value={values.email}
                          onChange={handleEmail('email')}
                          className={classes.textField}
                          margin="normal"
                        />

                        <TextField
                          required
                          id="password"
                          label="Password"
                          value={values.password}
                          className={classes.textField}
                          type="password"
                          onChange={handlePassword('password')}
                          autoComplete="current-password"
                          margin="normal"
                        />

                        <Button variant="contained" disabled={values.email===''|| values.password===''} onChange={handleButton('button')} type="submit" size="medium" color="primary" className={classes.margin} >
                              Login
                        </Button>
               
                </form>
               <div> {austate.message==''?'': <div style={{color:'red'}}>{austate.message}</div> }</div>
            </div>
        )
   
}

export default Login