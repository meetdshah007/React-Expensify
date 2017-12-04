import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      note: '',
      amount: 0,
      createdAt: new moment(),
      calendarFocused: false,
      error: ''
    }
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChage = this.onAmountChage.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  };

  onDescriptionChange(e){
    const description = e.target.value;
    this.setState(()=>({ description }));
  };

  onNoteChange(e){
    const note = e.target.value;
    this.setState(()=>({ note }));
  };

  onAmountChage(e){
    const amount = e.target.value,
          regex = /^\d{1,}(\.\d{0,2})?$/;
    if(!amount || amount.match(regex)){
      this.setState(()=>({ amount }))
    }
  };

  onDateChange(createdAt){
    this.setState(()=>({
      createdAt
    }))
  };

  onFocusChange(calendarFocused){
    this.setState({ calendarFocused })
  };

  onSubmit = e =>{
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState(()=>({
        error: "Please provide Description and Amount information"
      }));
      return;
    }
    this.setState(()=>({
      error: ""
    }));
    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10)* 100,
      createdAt: this.state.createdAt.valueOf(),
      note: this.state.note
    });
  };

  render(){
    return (
        <div>
          <form onSubmit={this.onSubmit}>
            {this.state.error && <p>{this.state.error}</p>}
            <div>
              <input
                type="text"
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
          </div>
          <div>
            <input
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChage}
            />
        </div>
        <div>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={date=>this.onDateChange(date)}
            focused={this.state.calendarFocused}
            onFocusChange={({ focused }) => this.onFocusChange(focused)}
            numberOfMonths={1}
            isOutsideRange={()=>false}
          />
        </div>
        <div>
          <textarea
            placeholder="Add a note for your expense (optional)."
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
        </div>
        <div>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
    );
  }
}
