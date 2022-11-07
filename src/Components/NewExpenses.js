import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css'

const NewExpenses=(props)=> {
    const [isEditing,setIsEditing]=useState(false);
   
    const onSaveExpenseData=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
       
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler=()=>{
        setIsEditing(true);
    }

    const cancelButtonHandler=()=>{
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
           {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} 
            {isEditing &&   <ExpenseForm onSaveExpenseData={onSaveExpenseData} cancelButtonHandler={cancelButtonHandler}/>} 
        </div>
    )
}

export default NewExpenses;