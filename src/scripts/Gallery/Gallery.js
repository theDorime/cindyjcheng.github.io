import React from 'react'
import { SideNavBar } from '../Util'
import Photos from './Photos'

export function PuertoRico() {
    const bg = new Photos('PuertoRico');
    return <div> 
            {SideNavBar('Gallery')}
            {bg.buildGallery()}
    </div>
}

export function NiagaraFalls() {
    const bg = new Photos('NiagaraFalls');
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

export function SpringBreak() {
    const bg = new Photos('SpringBreak');
    return <div> 
            {SideNavBar('Gallery')}
            {bg.buildGallery()}
    </div>
}


