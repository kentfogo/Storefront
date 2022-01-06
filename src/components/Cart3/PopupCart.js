import React, { useState } from 'react';
import {popup, popupInner,closeBtn} from "./popup.module.scss"


const PopupCart = (props) => {


  return(props.trigger) ? (
    <div className={popup}>

      <div className={popupInner}>
        <button className={closeBtn} onClick={() => props.setTrigger(false)}>Close</button>

          {props.children}
      </div>
    </div>
  ) : "";
};

export default PopupCart;
