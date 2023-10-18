import React from 'react'
import { SideNavBar } from './Util'
import '../styles/Home.css'
export function Home() {
    return <div> 
        {SideNavBar('Home')}
        <div class="container-fluid bg-2 text-center">
            <img src={require("./pfp.JPG")} class="img-responsive img-circle margin" alt="Bird" width="300" height="300"/>
            <h3 className="aboutText">
                Welcome and thank you for stopping by my personal website. 
                <br></br>
                I created this site to play around with code, share, and inspire! 
            </h3>
        </div>
        
    </div>
};