import React from 'react'
import { SideNavBar } from '../Util'

export function Photos( {section} ) {
return <div> 
        {SideNavBar('Home')}
        {section.text}
    </div>
}