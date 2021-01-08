import React from 'react';
import Details from './component/details/details'
import {Grid} from '@material-ui/core';
import useStyles from './styles';
import Main from "./component/Main/Main";



const App =()=>{
     const classes= useStyles();
    return(
        <div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{Height:'100vh'}}>
            <Grid item xs={12} sm={4} className={classes.mobile}>
                <Details title={"Income"}></Details>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.main}>
               <Main></Main>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.desktop}>
                <Details title={"Income"}></Details>
            </Grid>

            <Grid item xs={12} sm={4} className={classes.last}>
                <Details title={"Expense"}></Details>
            </Grid>
        </Grid>
      
        </div>
    )
}

export default App;