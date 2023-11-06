import React from 'react'
import { SideNavBar } from '../Util'
import Photos from './Photos'

export function Iceland() {
    const bg = new Photos('Iceland');
    return <div> 
            {SideNavBar('Gallery')}
            {bg.buildGallery()}
    </div>
}

export function PuertoRico() {
    const bg = new Photos('Puerto Rico');
    return <div> 
            {SideNavBar('Gallery')}
            {bg.buildGallery()}
    </div>
}

export function Buffalo() {
    const bg = new Photos('Buffalo');
    return <div> 
            {SideNavBar('Gallery')}
            {bg.buildGallery()}
    </div>
}

export function Graduation() {
    const bg = new Photos('Graduation');
    return <div> 
            {SideNavBar('Gallery')}
            {bg.buildGallery()}
    </div>
}

export function NYC() {
    const bg = new Photos('NYC');
    return <div> 
            {SideNavBar('Gallery')}
            {bg.buildGallery()}
    </div>
}


