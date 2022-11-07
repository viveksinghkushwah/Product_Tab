import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {

        setFilteredYear(selectedYear);

    };
    const filteredExpenses = props.item.filter((x) => (x.date.getFullYear().toString() === filteredYear));


    return (<div className='Expenses-card'>
        <ExpensesFilter
            onChangeFilter={filterChangeHandler}
            selected={filteredYear} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
    </div>
    )
}

export default Expenses
