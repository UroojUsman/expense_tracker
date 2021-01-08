
const ContextReducer=(state,action)=>{

    let Transaction;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            Transaction= state.filter((t)=>t.id !=action.payload);
            localStorage.setItem('transaction',JSON.stringify(Transaction));
            return Transaction;
            
        case 'ADD_TRANSACTION':

            Transaction=[action.payload,...state];
            localStorage.setItem('transaction',JSON.stringify(Transaction));
            return Transaction

        default:
            return state;
    }
}
export default ContextReducer;