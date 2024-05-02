import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
        
        <div className='navTitle'>
            Travellite
        </div>

        <div className='navList'>

            <a className='navItem' onClick={() => navigate('/')}> Home </a>
            <a className='navItem' onClick={() => navigate('/')} href='/#tours'> Our Tours </a>
            <a className='navItem' onClick={() => navigate('/')} href='/#about'> About Us </a>
            <a className='navItem' onClick={() => navigate('/book')}> Book Now </a>

        </div>
    </div>
  )
}

export default Navbar