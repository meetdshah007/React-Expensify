import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import './App.css';
// import './redux-example';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount:1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount:2100, createdAt: 100 }));
store.dispatch(addExpense({ description: 'Rent', amount:1200, createdAt: 120 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
