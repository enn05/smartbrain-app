import React from 'react';
import brain from './brain.png';
import Tilt from 'react-tilt';
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 110, width: 110 }} >
                <div className="center Tilt-inner pa3">
                    <img style={{paddingTop: '8px'}}alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}
        
export default Logo;