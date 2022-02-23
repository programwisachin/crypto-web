import React from 'react'
import '../styles/CenterBody.css'
import Wallet from '../icons/Wallet.svg'
import APISub from './APISub'
import ReferralSub from './ReferralSub'
import RewardSub from './RewardSub'
import TutorialSub from './TutorialSub'
const CenterBody = () => {
  return (
    <div className='centerBody'>
      <div className="centerBody_first">
        <div>Section</div>
        <div>
          <img src={Wallet} alt="" />
          <h6>0.2 $XYZ</h6>
          <div className="tier">Tier 1</div>
        </div>
      </div>
      <TutorialSub/>
      <RewardSub />
      <ReferralSub/>
      <APISub />
    </div>
  )
}

export default CenterBody