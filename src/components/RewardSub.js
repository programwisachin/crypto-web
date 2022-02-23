import React from 'react'
import '../styles/RewardSub.css'
import Link from '../icons/Group 16082.svg'
const RewardSub = () => {
  return (
    <div className='rewardSub'>
      <div>Your rewards</div>
      <div className='rewardSub_link'>
        <span>$ 0.26231428</span>
        <button><img src={Link} alt="" className='linkIcon'/> Custom link</button>
      </div>
      <div>
        <span>$40 AVAX</span>
        <span>$10 BNB</span>
        <span>$210 BTC</span>
      </div>
    </div>
  )
}

export default RewardSub