//Expenses Reducer
const expensesReducerDefaultState = [];
/**
*state: current state of store
*action: new values that comes from the action generators
*/
export default (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state, //spreading operator
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense, //spreading object operator
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};
