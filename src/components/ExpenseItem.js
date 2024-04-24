import React, { useContext } from 'react';
import {TiDelete, TiZoomOut,TiZoomIn } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, Currency } = useContext(AppContext);

    const handleDeleteExpenses =() => {
        dispatch({
        type: 'DELETE_EXPENSE',
        payload: props.id,
    });
};
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
        <td><TiZoomIn  color='green' size='2em' onClick={event=> increaseAllocation(props.name)}></TiZoomIn></td>
        <td><TiZoomOut color='red' size='2em' onClick={event=> decreaseAllocation(props.name)}></TiZoomOut></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpenses}></TiDelete></td>
    </tr>
);
};

export default ExpenseItem;
