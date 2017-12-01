import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const AddExpensePage = ()=>(
  <div>
    This is from Add Expense.
  </div>
);

const EditExpensePage = ()=>(
  <div>
    This is from Edit Expense.
  </div>
);

const HelpPage = ()=>(
  <div>
    This is from HelpPage.
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route
        path="/"
        component={App}
        exact={true}
      />
      <Route
        path="/create"
        component={AddExpensePage}
      />
      <Route
        path="/edit"
        component={EditExpensePage}
      />
      <Route
        path="/help"
        component={HelpPage}
      />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
