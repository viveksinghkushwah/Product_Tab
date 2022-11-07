import './ExpensesList.css'
import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

  //  let expenseContent = <h1>No Entry Found</h1>
    if (props.items.length === 0) {
     return <h2 className='expenses-list__fallback'>No expenses Found</h2>
    }

    return (
        <ul className='expenses-list'>
        {
            props.items.map((x) => (
                <ExpenseItem key={x.id} title={x.title}  amount={x.amount} date={x.date}
                />
            ))}
    </ul>
    )
}

export default ExpensesList