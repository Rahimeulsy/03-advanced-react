import avatar from "../../../assets/default-avatar.svg";
import React from "react";
export function Person({name, nickName='shakeAndBake', images}) {
    // const img= images?.[0]?.small?.url || avatar;
    const img= images?.[0]?.small?.url ?? avatar; //images dizisinde bir resim varsa ve bu resmin small boyutunda bir url değeri varsa onu alır. Eğer yoksa, avatar adında varsayılan bir SVG görselini kullanır.
  return (<div>
    <img src={img} alt={name} style={{width:'50px'}} />
    <h4>{name}</h4>
    <p>NickName: {nickName}</p>
  </div>
  );
}
  