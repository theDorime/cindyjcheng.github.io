import React from 'react'
import { SideNavBar } from './Util'
import '../styles/Home.css'

export function Home() {
    return <div> 
        {SideNavBar('Home')}
        <div class="container-fluid bg-2 text-center">
            <img src={require("./pfp.JPG")} class="img-responsive img-circle margin" alt="Bird" width="350" height="350"/>
            <h3 className="aboutText">
                Welcome and thank you for stopping by my personal website. 
<br></br>
                I was born and raised in Chinatown NY and graduated from University at Buffalo 2023 in Computer Science with a minor in Philosophy. 
                Aside from working as a Software Dev with a focus in Cloud and Metadata development, I enjoy learning about web and game dev 
                to pursue creative projects! Encapsulating my passion in Computer Science is aspiring to learn, adapt, and apply creative problem solving in 
                life. Such as my love for rock climbing- solving a beta through trial and error, learning other approaches/techniques from peers, and embracing falling. 
                I created this site to play around with code, share, and inspire! 

                Lots of love, 
                Cindy J Cheng.
            </h3>
        </div>
    </div>
};

