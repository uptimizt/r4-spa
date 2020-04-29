import React from 'react';

import {
  
    BottomNavigation,
    BottomNavigationAction,
    AppBar,
    makeStyles,
} from '@material-ui/core';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';




export default function BottomNavigationBar() {
    const useStyles = makeStyles((theme) => ({
        text: {
          padding: theme.spacing(2, 2, 0),
        },
        paper: {
          paddingBottom: 50,
        },
        list: {
          marginBottom: theme.spacing(2),
        },
        subheader: {
          backgroundColor: theme.palette.background.paper,
        },
        appBar: {
          top: 'auto',
          bottom: 0,
        },
        grow: {
          flexGrow: 1,
        },
        fabButton: {
          position: 'absolute',
          zIndex: 1,
          top: -30,
          left: 0,
          right: 0,
          margin: '0 auto',
        },
      }));

      const classes = useStyles();
      
    return (

        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </AppBar>
    );
}