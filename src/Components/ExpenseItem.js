import './ExpenseItem.css';
import React from 'react'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem=(props)=> {
   // const [title,setTitle ]=useState(props.title);
   // const ButtonHandler=()=>{
    //    setTitle('updated');}
    return (
      <li>
        <Card className="expense-item">
       <ExpenseDate date={props.date}/>

          <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price ">${props.amount}</div>
         {/* <button onClick={ButtonHandler}>Change Title</button> */}
        </div>
        </Card>
        </li>
        );
}
export default ExpenseItem;
