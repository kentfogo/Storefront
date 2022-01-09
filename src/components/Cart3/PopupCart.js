import React, { useState } from 'react';
import {popup, popupInner,closeBtn, popupOuter, popupActive, popupRight} from "./popup.module.scss"
import cx from 'classnames'


const PopupCart = (props) => {
  

  return(props.trigger) ? (
    <div className={popup}>
      <div className={cx(popupOuter, popupActive, popupRight)}>
        <div className={popupInner}>
          <button className={closeBtn} onClick={() => props.setTrigger(false)}>Close</button>
          {props.children}
        </div>
      </div>
    </div>
  ) : "";
};

export default PopupCart;
