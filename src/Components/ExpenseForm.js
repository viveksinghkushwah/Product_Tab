import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    const titleHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateHandler = (event) => {
        setDate(event.target.value);
    };
    const submitHandler=(event)=>{
          event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        }; 
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };
    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleHandler} value=
                    {enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amountHandler} value={enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateHandler} value={enteredDate}/>
                </div>
           
                <div className="new-expense__actions"><button type='submit'>Add Expense</button></div>
                <div className="new-expense__actions"><button onClick={props.cancelButtonHandler}>Cancel</button></div>

            </div>
        </form>

    );
}
export default ExpenseForm