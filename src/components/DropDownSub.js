import React from 'react'
import '../styles/DropDownSub.css'
import Wallet from '../icons/Wallet.svg';
import Ellipse from '../icons/Ellipse 131.svg';
import DownIconSmall from '../icons/Vector.svg';
import DownIconLarge from '../icons/Vector2.svg';
const DropDownSub = () => {
  return (
    <div className='dropDownSub'>
        <div className="dropDownSub_first">
           <img src={Ellipse} alt="img" />
           <div>Avalanche</div>
           <img src={DownIconSmall} alt="img" /> 
        </div>
        <div className="dropDownSub_second">
            <img src={Wallet} alt="img" />
            <div>0xf6...1353</div>
            <img src={DownIconLarge} alt="img" />
        </div>
    </div>
  )
}

export default DropDownSub