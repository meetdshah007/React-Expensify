import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filter';

const ExpenseListFilters = (props)=>(
  <div>
    <input type="text" value={props.filter.text} onChange={((e)=>{
        props.dispatch(setTextFilter(e.target.value));
      })} />

    <select value={props.filter.sortBy} onChange={((e)=>{
        let dispatchMethod = sortByDate;
        switch (e.target.value) {
          case 'date':
            dispatchMethod = sortByDate;
            break;
          case 'amount':
            dispatchMethod = sortByAmount;
            break;
          default:
            dispatchMethod = sortByDate;
        }
      props.dispatch(dispatchMethod());
    })}>
      <option value="date"> Date </option>
      <option value="amount"> Amount </option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}
export default connect(mapStateToProps)(ExpenseListFilters);
