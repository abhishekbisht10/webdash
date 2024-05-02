import React from 'react'
import '../styles/Home.css'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='homeBg' />

        <div id='tours' className='tours'>
            <div className='tourTitle'>Our Tours</div>
            
            <div className='deck'>

                <div className='card'>
                    <img src={require('../assets/china.jpg')} alt='China' loading='lazy' />
                    <div className='cardText'>China</div>
                </div>

                <div className='card'>
                    <img src={require('../assets/japan.jpg')} alt='Japan' loading='lazy' />
                    <div className='cardText'>Japan</div>
                </div>

                <div className='card'>
                    <img src={require('../assets/india.jpg')} alt='India' loading='lazy' />
                    <div className='cardText'>India</div>
                </div>

                <div className='card'>
                    <img src={require('../assets/japan.jpg')} alt='Japan' loading='lazy' />
                    <div className='cardText'>Japan</div>
                </div>
                
            </div>
        </div>

        <div id='about' className='tours'>
            <div className='tourTitle'>About Us</div>
            
            <div className='text' style={{fontSize: 18}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at feugiat diam. Nam ultrices pharetra felis, eu malesuada odio fermentum quis. Nulla eu gravida nunc. Duis a mi eget lorem ultricies rhoncus. Duis aliquam enim ut tempor ullamcorper. Maecenas tincidunt elementum vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et tempor enim.
            </div>
        </div>

        <div className='text' style={{padding: 20}}>
            @Travellite 2024
        </div>
    </div>
  )
}

export default Home