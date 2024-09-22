import { useEffect } from "react";
import { useState } from "react";
const CleanupFunction = () => {

  const [toggle, setToggle]= useState(false);//Bu state, bileşenin gösterilip gizlenmesini kontrol ediyor.
  console.log('render');
  
  return (
    <div>
      <button className="btn" onClick={()=> setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponenet/>}
    </div>
  ); //Eğer toggle true ise, RandomComponent bileşeni render ediliyor.
};
const RandomComponenet=()=>{
  useEffect(()=>{

    const someFunc=()=>{
      //some logic
    };
    window.addEventListener('scroll', someFunc);
    return ()=> window.removeEventListener,('scroll', someFunc);
    // // console.log('hmm, this is interesting');
    // const intId = setInterval(()=>{
    //   // console.log('hello from interval');
      
    // }, 1000);
    // return()=>{
    //   clearInterval(intId);
    //   console.log('cleanup');
    // };
  },[]);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
