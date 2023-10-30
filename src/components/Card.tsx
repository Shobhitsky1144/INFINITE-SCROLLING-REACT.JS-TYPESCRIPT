import React from 'react'
import { ListType } from '../datatypes';


interface CardProps{
    list:ListType[];
}

const Card:React.FC<CardProps>= ({list}) => {
  return (
    <div className='todo_parent'>
           <h1>Infinite Scrolling</h1>
         {list?.map((elem,ind)=>{
    return(
      <div className='todo-items' key={ind}>
   
<h2>{elem.id}<br/>{elem.title}</h2>
<br/>
      </div>
    )
  })}
      <h1>Loading...</h1>
    </div>
  )
}

export default Card