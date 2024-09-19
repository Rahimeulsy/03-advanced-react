import { useEffect, useState } from "react";
const url = 'https://api.github.com/users';

const FetchData = () => { //GitHub API'den kullanıcı verilerini alacak ve görüntüleyecek
  const [users, setUsers]=useState([]); //Başlangıç değeri boş bir dizi ([]), çünkü API çağrısından dönecek kullanıcılar burada saklanacak.
  useEffect(()=>{ //Bileşen yüklendiğinde bir kere çalışacak bir fonksiyon belirleniyor (API'den veri çekmek için).
    const fetchData = async ()=>{ //fetchData adında bir asenkron fonksiyon tanımlanıyor. Bu fonksiyon API'den veri çekecek.
      try{
        const response =await fetch (url);
        const users= await response.json(); //API'den dönen veriler JSON formatında alınıyor.
        setUsers(users); //API'den gelen kullanıcı verileri users state'ine kaydediliyor.
      }catch (error){
        console.log(error);
      }
    };
    fetchData();
  },[]);
  return (<section>
    <h3>github users</h3>
    <ul className="users">
      {users.map((user)=>{ //users state'inde bulunan her bir kullanıcı için bir map fonksiyonu kullanılarak bir liste elemanı (li) oluşturuluyor.
        const{id, login, avatar_url, html_url}=user;
        return(
        <li key={id}>
          <img src={avatar_url} alt={login}/>
          <div>
            <h5>{login}</h5>
            <a href={html_url}>profile</a>
          </div>
        </li>);
      })}
    </ul>
  </section>
  );
};
export default FetchData;
