import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Icon = ({type, ...props}) => {
  switch (type) {
    case 'menu':
        return <AiOutlineMenu {...props} />
    default: return null
  }
}

export default Icon