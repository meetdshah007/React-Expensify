import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      note: '',
      amount: 0
    }
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChage = this.onAmountChage.bind(this);
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
          regex = /^\d*(\.\d{0,2})?$/;
    if(amount.match(regex)){
      this.setState(()=>({ amount }))
    }
  };

  render(){
    return (
        <div>
          <form>
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
