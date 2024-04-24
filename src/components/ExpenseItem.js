import React, { useContext } from 'react';
import {TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, Currency } = useContext(AppContext);
    /*     const handleDeleteExpenses =() => {
        dispatch({
        type: 'DELETE_EXPENSE',
        payload: props.id,
    });
};*/
    const decreaseAllocation =(name) => {
        const expense = {
            name: name,
            cost: 10,
        }
        dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
    });
};

const increaseAllocation = (name) => {
    const expense = {
        name: name,
        cost: 10,
    };
    dispatch({
        type: 'ADD_EXPENSE',
        payload: expense
    });
}

return (
    <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><button size='1.5em' onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button size='1.5em' onClick={event=> decreaseAllocation(props.name)}>-</button></td>
    </tr>
);
};

export default ExpenseItem;
