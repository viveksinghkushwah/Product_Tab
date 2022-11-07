import Expenses from "./Components/Expenses";
import NewExpenses from "./Components/NewExpenses";
import React,{useState} from "react";
const Dummy_expenses = [
  {
    id: 'e1',
    title: 'Paper Book ',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App=()=> {
 const [expenses,setExpenses]= useState(Dummy_expenses);
const addExpenseHandler=(expense)=>{
  setExpenses((prevExpenses)=>{
    console.log(expense);
  
  //   //console.log(prevExpenses);
  //   console.log(expenses);
  // //  return [...prevExpenses,expense];
 return [expense, ...prevExpenses];
  });
};
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>

    </div>
  );
}

export default App;
