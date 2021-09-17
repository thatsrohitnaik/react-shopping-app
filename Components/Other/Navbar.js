import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {SettingContext} from '../../Context/Setting/SettingContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
   // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const {handleDrawer} = useContext(SettingContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>{handleDrawer(true)}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Store
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}