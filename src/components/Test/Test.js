import React, {useState} from 'react'
import './Test.css'

function Test () {

  const [isOpen,setIsOpen]=useState(false);
  const onClickHeader=()=>{
    setIsOpen(!isOpen);
  }
  return(
    <div className='test'>
      <div className='box'>
        <p onClick={onClickHeader} className='title'>Click Me!<i className="arrow-up"></i>
        </p>
        <div className={`description ${isOpen ? 'description-active' : ''}`}>
            fjaksdddddddddddddddddddddddd
            fdsaffffffffffffffffffffff
            errrreeeeeeeeeeee
        </div>
      </div>
    </div>
  )
}

export default Test
