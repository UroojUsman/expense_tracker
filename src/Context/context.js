import React, {useReducer,createContext} from 'react';
import ContextReducer from './contextReducer';

const initialState= JSON.parse(localStorage.getItem('transaction')) || [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider=({children})=>{

    const [Transactions, dispatch] = useReducer(ContextReducer, initialState);
    const balance=Transactions.reduce((acc,CurrVal)=>{
       return CurrVal.type== 'Expense' ?(acc-CurrVal.amount):(acc+CurrVal.amount)
    },0);

    const DeleteTransaction=(id)=>{

        dispatch({type:'DELETE_TRANSACTION',payload:id});

    }

    const AddTransaction=(Transaction)=>{

        dispatch({type:'ADD_TRANSACTION', payload:Transaction});

    }

    return(
        <ExpenseTrackerContext.Provider value={{
            DeleteTransaction,AddTransaction,Transactions,balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}