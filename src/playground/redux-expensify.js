import {createStore, combineReducers} from 'redux';

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

//Filters Reducer
const filtersReducerDefaultState = {
    'text': '',
    'sortBy': 'date',
    'startDate': undefined,
    'endDate': undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        default:
        return state;
    }
}

//Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
console.log(store.getState());

const demoState = {
    expenses: [{
        id: '123sdjas',
        description: 'April Rent',
        note: 'Final payment',
        'amount': 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
