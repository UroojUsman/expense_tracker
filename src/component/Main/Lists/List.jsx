import React,{useContext} from 'react';
import {List as MuiList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton,Slide, Avatar} from '@material-ui/core'
import {Delete,MoneyOff} from '@material-ui/icons';
import useStyles from './styles';
import {ExpenseTrackerContext} from '../../../Context/context'
const List=()=>
{
    const classes = useStyles();
    
    const {DeleteTransaction,Transactions} = useContext(ExpenseTrackerContext);
   
    return(
        <MuiList dense={false} className={classes.list}>
            {Transactions.map((transaction)=>
             <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                 <ListItem>
                     <ListItemAvatar>
                         <Avatar className={transaction.type == "Income" ? classes.AvatarIncome : classes.AvatarExpense}>
                            <MoneyOff/>
                         </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary={transaction.category} secondary={`Rs ${transaction.amount} - ${transaction.date}`}/>
                     <ListItemSecondaryAction>
                         <IconButton edge="end" aria-label='delete' onClick={()=>DeleteTransaction(transaction.id)}>
                            <Delete/>
                         </IconButton>
                     </ListItemSecondaryAction>
                 </ListItem>
             </Slide>

            )}
        </MuiList>

    )
}

export default List;