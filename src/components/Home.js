import React from 'react'
import '../styles/Home.css'
import SideBar from './SideBar'
import CenterBody from './CenterBody'
import RightBody from './RightBody'
const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <CenterBody/>
        <RightBody/>
    </div>
  )
}

export default Home