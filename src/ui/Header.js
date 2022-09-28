import { ThemeContext } from "@emotion/react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import {makeStyles,createStyles} from '@mui/styles'
const useStyles=makeStyles(theme=>
    createStyles({
    
    tabContainer:{
        marginLeft:'auto',
    }
}))
const Header =()=>{
    const classes = useStyles();
    return(
<AppBar color="primary">
    <Toolbar>
       <Typography variant="h3">
        <Tabs className={classes.tabContainer}>
            <Tab label="Books" value={0}></Tab>
            <Tab label="Music" value={1}></Tab>
            <Tab label="Games" value={2}></Tab>
        </Tabs>
       </Typography>
    </Toolbar>
</AppBar>
    )
}

export default Header;