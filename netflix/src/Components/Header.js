import React from 'react'
import { useState } from 'react'

function Header() {
    const [overlay, setOverlay] = useState(false)
    window.onscroll=()=>{
        if(window.scrollY>150){
            setOverlay(true)
        }else{
            setOverlay(false)
        }
    }
  return (
    <header className={(overlay)?'dark':''}>
    <div className='logo'>
        <img src='netflix/netflix.png'/>
    </div>
    <nav>
        <img src='netflix/nav.png'/>
    </nav>
    </header>
  )
}

export default Header