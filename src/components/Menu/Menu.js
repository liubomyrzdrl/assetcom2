
import React , {useContext} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {AuthContext} from '../../contexts/AutnContext';
 
import './menu.sass'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const bool= false;
const Menu = () => {
    const classes = useStyles();
    const{austate,logOut}= useContext(AuthContext); 

    const toggleLogin=()=>{
         logOut();
    }
    return (
        <div className={classes.root}>
            <AppBar position="static"> 
                <Toolbar>
                <Typography  variant="h6" className={classes.title}> <Link  className="menu-item"to="/"><h3>Home</h3></Link> </Typography>
                   {austate.isAutentificated  &&<Link  className="menu-item"to="/users"><h3>Користувачі</h3></Link>}
                   {austate.isAutentificated &&<Link className="menu-item"to="/profile"><h3>Profile</h3></Link>}
                   {austate.role=="admin" &&<Link className="menu-item"to="/admin"><h3>Admin</h3></Link>}
                   {!austate.isAutentificated && <Link className="menu-item" to="/login"><h3>Login</h3></Link>}
                   {austate.isAutentificated &&< a className="menu-item" onClick={toggleLogin}>LogOut</a>}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Menu