import React ,{useState,useContext} from 'react';
import {TextField, Typography,Grid,Button, FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
import useStyles from './styles'
import {ExpenseTrackerContext} from '../../../Context/context';
import {v4 as uuidv4} from 'uuid';
import {incomeCategories,expenseCategories} from '../../../Constants/Categories';
import FormatDate from '../../../UtilityFunctions/FormatDate'
import CustomizedSnackBar from '../../Snackbar/Snackbar';


const Form=()=>{

    const classes= useStyles();

    const initialState={
        amount:'',
        category:'',
        type:'Income',
        date: FormatDate(new Date())
    }

  
    const [FormData, setFormData] = useState(initialState);
    const {AddTransaction}= useContext(ExpenseTrackerContext);
    const [open, setOpen] = React.useState(false);
    const selectedCategory= (FormData.type == 'Income' ? incomeCategories : expenseCategories) ;
    
    const createTransaction=()=>
    {   
        if(Number.isNaN(Number(FormData.amount))|| Number(FormData.amount)==0 || !FormData.date.includes('-')){ 
            return;
        }
        const transaction={...FormData,amount:Number(FormData.amount),id: uuidv4()}
        setOpen(true);
        AddTransaction(transaction);
        setFormData(initialState);

    }



    return(
       <Grid container spacing={2}>
           <CustomizedSnackBar open={open} setOpen={setOpen} />
           <Grid item xs={12}>
               <Typography align="center" variant="subtitle2" gutterBottom>
                   
               </Typography>
           </Grid>
           <Grid item xs={6}>
               <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={FormData.type} onChange={(e)=> setFormData({...FormData,type:e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
               </FormControl>
           </Grid>
           <Grid item xs={6}>
               <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={FormData.category} onChange={(e)=> setFormData({...FormData,category:e.target.value})}>
                   {selectedCategory.map((c)=><MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                </Select>
               </FormControl>
           </Grid>
           <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={FormData.amount} onChange={(e)=>setFormData({...FormData, amount:e.target.value})}/>
               
           </Grid>
           <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={FormData.date} onChange={(e)=>setFormData({...FormData,date:FormatDate(e.target.value)})}/>
           </Grid>
           <Button className={classes.Button} variant="outlined" color="primary" fullWidth style={{marginTop:'20px'}} onClick={createTransaction}>Create</Button>
       </Grid>
    )
}

export default Form;