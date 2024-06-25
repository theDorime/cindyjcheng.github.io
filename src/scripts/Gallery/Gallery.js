import React from 'react'
import { SideNavBar } from '../Util'
import Photos from './Photos'
import { useLocation } from 'react-router-dom';

export function Gallery() {
    const match = useLocation();
    const location = match.pathname.replace('/', '');
    const bg = new Photos(location);
    
    return (
        <div> 
            {SideNavBar('Gallery')}
            {bg.buildNewGallery()}
        </div>
    )   
}
