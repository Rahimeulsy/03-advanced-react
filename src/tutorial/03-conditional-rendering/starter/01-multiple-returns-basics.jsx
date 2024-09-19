import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading]=useState(true); //useState(true) ile isLoading adında bir state tanımlanmış. Başlangıç değeri true

  useEffect(()=>{
    setTimeout(()=>{ //setTimeout fonksiyonu ile 3 saniyelik bir gecikme başlatılır.
      //veri getirme tamamlandı
      setIsLoading(false);//3 saniye sonra, setIsLoading(false) çalışarak isLoading state'i false olarak güncellenir, yani veri yüklemesi tamamlanmış kabul edilir.
    },3000);
  },[]);
  if (isLoading){
    return <h2>Loading..</h2>; //isLoading state'i true iken, bileşen "Loading.." mesajını ekranda gösterir.
  }
  return <h2>Multiple Returns Basics</h2>;//isLoading false olduğunda ise "Multiple Returns Basics" yazısı ekranda gösterilir.
};
export default MultipleReturnsBasics;
