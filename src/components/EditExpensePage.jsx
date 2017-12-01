import React from 'react';

const EditExpensePage = (props)=>{
  console.log(props);
  return (
    <div>
      This is from Edit Expense.
      Editing Page with id of {props.match.params.id}.
    </div>
  );
}

export default EditExpensePage;