import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import './App.css';
// import './redux-example';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filter';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

//Add Expense -> water Bill
store.dispatch(addExpense({ description: 'Water Bill', amount:100, createdAt: 100 }));
//Add Expense -> Gas Bill
store.dispatch(addExpense({ description: 'Gas Bill', amount:100, createdAt: 100 }));
//Set Text filter -> Bill (2 items ) -> water (1 item)
store.dispatch(setTextFilter('Bill'));
//getVisibleExpense -> print visible ones to screen
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filter));
setTimeout(()=>{
  store.dispatch(setTextFilter('Gas'));
}, 3000);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
