import React from 'react'
import '../styles/TutorialSub.css'
import Close from '../icons/i-remove.svg'
import BitcoinImg from '../icons/bitcoin.svg'
const TutorialSub = () => {
    return (
        <div className="tutorialSub">
            <div className='tutorialSub_desc'>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <div>Tutorial</div>
            </div> 
            <img src={BitcoinImg} alt="img" className='bitcoinImg'/>
            <img src={Close} alt="close" className='close' />
        </div>
    )
}

export default TutorialSub