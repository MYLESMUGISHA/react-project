
import React from 'react';
import './App.css';
import detailInfo from './Books';
import Book from './Book';

function App() {
  return (
    <div className="App">
  <BookList></BookList>
    </div>
  );
}


function BookList(){
  
return(
  <div>
{detailInfo.map(car=>{
console.log(car.carColor)
// console.log(detailInfo)


return <Book car={car} key={car.id}/> ;

})}

  </div>
)
}



// const Book=(props)=>{
//   // console.log(props)
//   console.log(props.car)
// const {carColor,carImage,carModel,price} = props.car;
//   return(
//      <section >
//       <div className='card'>
//    <img src={carImage}alt="book"></img>
//    <p >{carModel}</p>
//  <h1>{carColor}</h1>
//    <h2>{price}</h2>
  
//    </div>

//     </section>
//   )

// }

export default App;
