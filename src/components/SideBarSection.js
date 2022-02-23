import React from 'react'
import '../styles/SideBarSection.css'
const SideBarSection = ({Icon, desc, highlight}) => {
    return (
        <div className={highlight?'ss_highlighted':'ss'}>
            {Icon && <img src={Icon} className="ss_icon" alt={desc}/>}
            {desc && <h4>{desc}</h4>}
        </div>
    )
    }
export default SideBarSection