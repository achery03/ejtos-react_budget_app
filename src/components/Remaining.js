import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Budget from '../components/Budget';

const Remaining = () => {
   
    const { expenses, budget,Currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const totalExpenses = expenses.reduce((total,item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > newBudget ? 'alert-danger' : 'alert-success';
    return (
        <div className={'alert ${alertType}'} >
            <span>Remaining: {Currency}{newBudget - totalExpenses}</span>
            
        </div>
    );
};
export default Remaining;
