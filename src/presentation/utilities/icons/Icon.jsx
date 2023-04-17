import React from 'react'
import MenuIcon from '../../../assets/icons/menu.svg'

const Icon = ({id, className, ...props}) => {
    switch (id) {
        case 'menu_icon':
            return <MenuIcon {...{ className }} {...props} />
        default: return null
    }
}

export default Icon