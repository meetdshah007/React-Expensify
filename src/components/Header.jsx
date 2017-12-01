import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=>(
    <header>
      <h1>Expensify</h1>
      <NavLink to='/' exact={true} activeClassName="active-nav">Dashboard</NavLink>&nbsp;&nbsp;
      <NavLink to='/create' activeClassName="active-nav">Create Expense</NavLink>&nbsp;&nbsp;
      <NavLink to='/help' activeClassName="active-nav">Help</NavLink>&nbsp;&nbsp;
    </header>
);

export default Header;