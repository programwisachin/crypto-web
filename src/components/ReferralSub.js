import React from 'react'
import '../styles/ReferralSub.css'
import MoneyIcon from '../icons/money-bag.svg';
import CopyIcon from '../icons/ungroup.svg';

const ReferralSub = () => {
  return (
    <div className='referralSub'>
      <div className='referralSub_first'>
        <div><img src={MoneyIcon} alt="money" className='moneyIcon'/> <span style={{fontWeight:"700"}}>12.5%&nbsp;</span>of fee</div>
        <div className='referralSub_first_linkDesc'>Your Referral Link for xyz</div>
        <div>https://unityexchange.design <img src={CopyIcon} alt="copy" className='copyIcon' /></div>
      </div>
      <div className='referralSub_first'>
        <div><img src={MoneyIcon} alt="money" className='moneyIcon'/> <span style={{fontWeight:"700"}}>12.5%&nbsp;</span>of fee</div>
        <div className='referralSub_first_linkDesc'>Your Referral Link for xyz</div>
        <div>https://unityexchange.design <img src={CopyIcon} alt="copy" className='copyIcon' /></div>
      </div>
    </div>
  )
}

export default ReferralSub