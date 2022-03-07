import React from 'react';
import './App.css';
// import  from './Books';


const Book=(props)=>{
    // console.log(props)
    console.log(props.car)
  const { id,carColor,carImage,carModel,price} = props.car;
    return(
       <section >
        <div className='card'>
     <img src={carImage}alt="book"></img>
     <p >{carModel}</p>
   <h1>{carColor}</h1>
     <h2>{price}</h2>
    
     </div>
  
      </section>
    )
  
  }
  export default Book;