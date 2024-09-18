import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());


  const [count, setCount]=useState(0);
  const [name, setName]=React.useState()
  const handleClick =()=>{
    setCount(count+1);
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>clik me
      </button>
    </div>
  );
};

export default UseStateBasics;
