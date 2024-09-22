import {useState} from "react";
const UserChallenge = () => {
  const [user, setUser]= useState(null); 
//useState(null) ile başlangıçta user adında bir durum (state) oluşturulmuş. Bu durum başlangıçta null (yani kullanıcı giriş yapmamış).
  const login =()=>{
    //normaly connect to db or api
    setUser({name:'vegan food truck'}); //Bu fonksiyon çağrıldığında (login butonuna tıklandığında), setUser fonksiyonu çalışarak user durumunu günceller ve kullanıcının adını "vegan food truck" olarak ayarlar.
  };
  const logout =()=>{ //Bu fonksiyon çağrıldığında (logout butonuna tıklandığında), setUser(null) çalışarak kullanıcı bilgisini sıfırlar ve giriş ekranına geri döner.
    setUser(null);
  };
  return <div>
    {user ? (
    <div>
      <h4>hello there, {user.name}</h4>
      <button className="btn" onClick={logout}>logout</button>
    </div>
    )
    :(
      <div>
        <h4>please login</h4>
        <button className="btn" onClick={login}>login</button>
      </div>
      )}
  </div>
};

export default UserChallenge;
