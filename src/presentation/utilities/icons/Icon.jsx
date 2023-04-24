import React from 'react'
import { CgMenuMotion } from 'react-icons/cg'

const Icon = ({type, ...props}) => {
  switch (type) {
    case 'menu':
        return <CgMenuMotion {...props} />
    default: return null
  }
}

export default Icon