import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,remaining,Currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    } 
    const alertType2 = newBudget < remaining ? alert('You cannot reduce the budget value'):'alert-success';
    return(
<div className='alert alert-secondary'>
<span> Budget: {Currency}{newBudget}</span>
<input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
