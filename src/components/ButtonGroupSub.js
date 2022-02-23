import React from 'react'
import '../styles/ButtonGroupSub.css'
import Link from '../icons/Group 16082.svg'
import Cancel from '../icons/icon.svg'
const ButtonGroupSub = () => {
  return (
    <div className='btnGroup'>
        <button className='btn_link'><img src={Link} alt="img" /> Custom Link</button>
        <button className='btn_cancel'><img src={Cancel} alt="img" />Cancel</button>
    </div>
  )
}

export default ButtonGroupSub