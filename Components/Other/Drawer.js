import React, {useState, useContext} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {SettingContext} from '../../Context/Setting/SettingContext';

const useStyles = makeStyles((theme) => ({
    list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
   // paddingLeft: theme.spacing(4),
  },
}));


export default function Drawer(){

  const classes = useStyles();
  const {settings, handleDrawer} = useContext(SettingContext);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    handleDrawer(false)
  };

  
  return <Drawer open={settings.drawer} onClose={toggleDrawer("left", false)}>
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </div>
  </Drawer>

}