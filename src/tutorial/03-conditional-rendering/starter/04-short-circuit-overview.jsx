import { useState } from 'react';

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText]=useState('');
  //thurty
  const [name, setName]=useState('susan');
  const codeExample = text || 'hello world'; //(OR) operatörü, sol taraftaki ifade false (veya "falsy") ise sağdaki ifadeyi döndürür
//(AND) operatörü, sol taraftaki ifade true (veya "truthy") ise sağdaki ifadeyi döndürür. 
  return(
  <div>
    {/* {{if(someCondition){"won't work"}}} */}
    <h4>Falsy OR : {text ||'hello world'}</h4> 
    <h4>Falsy AND : {text && 'hello world'}</h4>
    <h4>Falsy OR : {name ||'hello world'}</h4>
    <h4>Falsy AND : {name && 'hello world'}</h4>
{codeExample}
  </div>
  );
};
export default ShortCircuitOverview;
