import React, { useState } from 'react'
import Navbar from '../utilities/Navbar'
import Drawer from '../utilities/drawer/Drawer'

const Home = ({...props}) => {
  const [open, setIsOpen] = useState(false)
  return (
    <section className='w-screen h-screen' {...props} >
        <Navbar/>
        <div className='w-full flex items-center h-[calc(100vh-3.5rem)]' >
          <Drawer {...{isOpen: open, setIsOpen}} />
          <div onClick={() => setIsOpen(true)} >Open</div>
          <div className='w-full border h-full border-green-600'>Item - 2</div>
        </div>
    </section>
  )
}

export default Home