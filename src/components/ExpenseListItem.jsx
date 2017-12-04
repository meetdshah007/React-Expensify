import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) =>(
  <div>
      <h3>Description : {description} </h3>
      <p>Amount : {amount} - {createdAt} </p>
      <button onClick={(()=>{
          dispatch(removeExpense({ id }));
      })}> Remove </button>
  </div>
);

export default connect()(ExpenseListItem);
