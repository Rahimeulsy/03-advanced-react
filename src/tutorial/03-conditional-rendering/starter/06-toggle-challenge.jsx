import { useState } from "react";
const ToggleChallenge = () => { //ToggleChallenge bileşeni, kullanıcının uyarıyı gösterip gizleyebileceği bir buton içeriyor.
    const [showAlert, setShowAlert]= useState(false);

    // const toggleAlert =()=>{
    //   if(showAlert){
    //     setShowAlert(false);
    //   }
    //   setShowAlert(true);
    // };
    return( //Mevcut showAlert değerini tersine çeviriyor. Eğer showAlert false ise, true yapıyor ve tersi.
      <div>
        <button className="btn" onClick={()=> setShowAlert(!showAlert)}>toggle</button>
        {showAlert && <Alert/>} 
        
      </div>
    ); // showAlert true olduğunda, Alert bileşeni render ediliyor (görünüyor).
  };

  const Alert =()=>{
     return <div className="alert alert-danger">hello world</div>; //Alert adlı bir bileşen tanımlanmış ve sabit bir mesaj döndürüyor.
  };
 

export default ToggleChallenge;
