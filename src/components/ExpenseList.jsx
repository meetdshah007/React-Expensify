import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props)=>(
  <div>
    <h4> Expense List</h4>
    <p>Total Items : {props.expenses.length}</p>
    {props.expenses.map((expense)=>(
      <ExpenseListItem {...expense} key={expense.id}/>
    ))}
  </div>
),
    mapStateToProps = (state) => {
      return {
        expenses: getVisibleExpenses(state.expenses, state.filter)
      }
    };


export default connect(mapStateToProps)(ExpenseList);
