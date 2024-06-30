import { SideNavBar } from './Util';
import React, { useState } from 'react';
import soundEffect from '../assets/ouch.mp3';
export function Game() {

    const [position, setPosition] = useState({ 
                                                x: Math.random() * (window.innerWidth/2 - window.innerWidth/4) + window.innerWidth/2, 
                                                y: Math.random() * (window.innerHeight/2 - window.innerHeight/4) + window.innerHeight/2
                                            });
    const [count, setCount] = useState(0);

    const handleImageClick = () => {
      const newX = Math.random() * (window.innerWidth/2 - window.innerWidth/6) + window.innerWidth/4;
      const newY = Math.random() * (window.innerHeight/2 - window.innerHeight/6) + window.innerHeight/4;
      setPosition({ x: newX, y: newY });
      setCount(count + 1);

      const audio = new Audio(soundEffect);
      audio.play();
    };

    
    return <div>
        {SideNavBar('Game', '')}
        <h3>A work in progress . . .
        <br></br><h5>Whack mole for now<br></br># Of Whacks: <b style={{ color: 'red' }}>{count}</b> </h5> </h3>
        
        <img src={ require('../assets/mole1.png') } style={{ position: 'absolute', top: position.y, left: position.x, width:'25px', height:'25px'}} onClick={handleImageClick}
        alt="Button" className="img-fluid"/>
        </div>

    
      
};
