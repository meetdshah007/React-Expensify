import React from 'react';

export default ({description, amount, createdAt}) =>(
  <div>
      <h3>Description : {description} </h3>
      <p>Amount : {amount} - {createdAt} </p>
  </div>
);
