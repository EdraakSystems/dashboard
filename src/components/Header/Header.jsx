import React, { useState } from "react";
import { data } from '../../data';

const Header = () => {
//   let [count, setCount] = useState(0);
  let [people,setPeople]=useState(data)
//   const handleClick = () => {
//     setCount(count + 1);
//   };
const removeOneItem=(id)=>{
    // console.log(id)
    const newPeople=people.filter((item)=>item.id!==id )
    setPeople(newPeople)
}


  return (
    <div>
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={()=>removeOneItem(id)}>Remove</button>
          </div>
        );
      })}
      <button type="button" style={{marginTop:'2rem'}} onClick={()=>setPeople([])}>Clear All</button>
      {/* <h1>You Clicked this button {count}'s Time</h1>
      <button onClick={handleClick}>Click to Change</button> */}
    </div>
  );
};

export default Header;
