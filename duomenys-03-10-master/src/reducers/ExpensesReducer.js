
const ExpenseReducer = (state,action) => {
    switch (action.type){
        case 'SET EXPENSES':
            return {
                ...state,
                expenses:action.payload
            }
        default:
          return state
    }
}
 
export default ExpenseReducer;