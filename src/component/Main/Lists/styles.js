import { formatMs } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {red,green} from '@material-ui/core/colors';

export default makeStyles((theme)=>({

    list:{
        maxHeight:'150px',
        overflow:'auto',
    },
    AvatarIncome:
    {
        color:'#fff',
        backgroundColor:green[500],
    },
    AvatarExpense:{
        color: theme.palette.getContrastText(red[500]),
        backgroundColor:red[500],
    },
    
})

)