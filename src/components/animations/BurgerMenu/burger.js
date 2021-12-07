import React , { useState } from 'react';
import './style.scss'
import {Bcontainer} from './style.scss'

const BurgerMenu = () =>{
  const [status, setStatus] = useState('open');

return(

  <nav>
    <div
    role="button"
    onCLick={() => setStatus(status === 'open' ? 'close' : 'open')}
    className = {Bcontainer}>
      <i className={status}></i>
      <i className={status}></i>
      <i className={status}></i>
    </div>
  </nav>

);
};

export default BurgerMenu;
