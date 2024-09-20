import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading]= useState(true)
  const [isError, setIsError]= useState(false)
const [user, setUser] = useState(null);

const fetchUser =async ()=>{ //fetchUser fonksiyonu, GitHub API'sine bir GET isteği yapar ve QuincyLarson adlı kullanıcının verilerini çeker.
    try{
      const resp=await fetch (url);
      if(!resp.ok){ //API'den gelen yanıt başarılıysa (resp.ok)
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const user= await resp.json(); //kullanıcı verilerini JSON formatında alır ve setUser ile state'e aktarır.
      setUser(user);
    }
    catch(error){
setIsError(error); //anıt başarısızsa (resp.ok false ise), hata durumu setIsError(true) ile güncellenir.
console.log(error);
    }
    setIsLoading(false); //setIsLoading(false) ile veri çekme işlemi sona erdiği için yükleme durumu kapatılır.
  };

useEffect(()=>{ //Bileşen ilk render olduğunda fetchUser fonksiyonu çağrılır. Bu sayede API'ye istek atılarak veri çekilir.
  fetchUser();
},[]);

if(isLoading){ //Eğer veri henüz yüklenmemişse (isLoading true ise), ekranda "Loading..." mesajı gösterilir.
  return <h2>Loading...</h2>;
}
if(isError){ //Eğer bir hata varsa (isError true ise), "There was an error..." mesajı görüntülenir.
  return <h2>There was an error...</h2>;
}
const {avatar_url, name, company, bio}=user;
return(
  <div>
    <img style={{width:'150px', borderRadius:'25px'}}
    src={avatar_url}
    alt={name}
    />
    <h2>{name}</h2>
    <h4>works at{company}</h4>
    <p>{bio}</p>
  </div>
)
};
export default MultipleReturnsFetchData;
