import React from 'react'
import { SideNavBar } from './Util'
import '../styles/Home.css'
export function Home() {
    return <div> 
        {SideNavBar('Home')}
        <div class="container-fluid bg-2 text-center">
            <img src={require("./pfp.JPG")} class="img-responsive img-circle margin" alt="Bird" width="250" height="280"/>
            <h3 className="aboutText">
                Welcome and thank you for stopping by my personal website.
                <br></br>
                This was created to play around with code, share, and inspire! 
            </h3>
        </div>
        
    </div>
};

