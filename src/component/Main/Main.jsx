import React,{useContext} from 'react';
import {Card, CardHeader ,CardContent,Typography, Grid, Divider} from '@material-ui/core';
import Form from "./Form/Form";
import List from './Lists/List';
import {ExpenseTrackerContext} from '../../Context/context';

const Main=()=>
    {
        const {balance}= useContext(ExpenseTrackerContext);
        return(
            <Card>
                <CardHeader title="Expense Tracker"/>
                <CardContent>
                    <Typography align="center" variant='h5'>
                        Total Balance Rs {balance}
                    </Typography>
                    <Typography variant="subtitle1"align='center' style={{lineHeight:'1.5em'}} >
                        
                    </Typography>
                    <Divider/>
                    <Form></Form>
                </CardContent>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List></List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    
        
    }

export default Main