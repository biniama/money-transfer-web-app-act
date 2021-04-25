import React from 'react';

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const MTAppBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MonetizationOnIcon />
                </IconButton>
                <Typography variant="h6">
                    Money Transfer App
          </Typography>
                <Button color="inherit">Create Account</Button>
            </Toolbar>
        </AppBar>
    );
}

export default MTAppBar;