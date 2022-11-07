import React from 'react'
import './Card.css'
const Card=(props) =>{
   const newclassname='card '+ props.className;
    return (
        <div className={newclassname}>{props.children}</div>
    )
}
export default Card;