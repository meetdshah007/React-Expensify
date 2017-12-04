import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//Action generator

//Add Expense
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
});

//Remove Expense
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


//Edit_expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//Filter by text
const setTextFilter = (text) =>({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_DATE
const sortByDate = (date)=>({
  type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = (amount)=>({
  type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate)=>({
  type: 'SET_START_DATE',
  startDate
});
//SET_END_DATE
const setEndDate = (endDate)=>({
  type: 'SET_END_DATE',
  endDate
});

const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) =>{
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];

    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
            return {
              ...expense,
              ...action.updates
            };
        }
        return expense;
      });
    default:
      return state;
  }
};

const filterDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterDefaultState, action) =>{
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate })=>{
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate,
          endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate,
          textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
    return 0;
  });
};


//Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

store.subscribe(()=>{
  const state = store.getState(),
        visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(visibleExpenses);

});
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount:100, createdAt: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount:300, createdAt: -100 }));

// store.dispatch(removeExpense({id: expenseTwo.expense.id}));
// store.dispatch(editExpense(expenseOne.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(-100));

const demoState = {
  expenses: [{
    id: 'poi90',
    description: 'january Rent',
    note: 'This is note',
    amount: 54500,
    createdAt: 0
  }],

  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
