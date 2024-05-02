import React, { useState } from 'react'
import '../styles/Book.css'
import Navbar from '../components/Navbar'

function Book() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [country, setCountry] = useState('');
    const [vis, setVis] = useState(false);

    function submit() {
        setVis(true)
        console.log(name, mobile, country)
    }

  return (
    <div className='book'>
        <Navbar />

        <div className='modal' style={{display: vis && 'flex'}}>
            <div className='text'>Hello! {name}</div>

            <div className='text'>{name}</div>
            <div className='text'>{mobile}</div>
            <div className='text'>{country}</div>

            <div className='cross' onClick={()=>setVis(false)}><b>X</b></div>
        </div>

        <div className='bookNow'>
            <div className='bn'>
                <img src={require('../assets/globe.gif')} alt='globe' />
            </div>

            <div className='booking'>
                <div className='tourTitle'>Book Now</div>

                <input type='text' placeholder='Name' className='in' value={name} onChange={(e)=>setName(e.target.value)} required />
                <input type='phone' placeholder='Mobile' className='in' value={mobile} onChange={(e)=>setMobile(e.target.value)} required />
                <input type='text' placeholder='Country' className='in' value={country} onChange={(e)=>setCountry(e.target.value)} required />
                <div className='button' onClick={()=>submit()}>Submit</div>
            </div>
        </div>

        <div className='text' style={{padding: 20}}>
            @Travellite 2024
        </div>
    </div>
  )
}

export default Book