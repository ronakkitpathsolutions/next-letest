import React from 'react'
import Navbar from '../utilities/Navbar'


const Home = ({ ...props }) => {
  return (
    <section className='w-screen h-screen' {...props} >
      <Navbar />
      <div className='w-full flex items-center h-[calc(100vh-3.5rem)]' >
        <div className="w-[70px] sm:w-[100px] lg:w-[320px] lg:py-6 lg:px-8 border h-full border-red-600">
          <ul >
            <li className='mb-3 lg:px-1 lg:py-3 border border-indigo-500' >navbar - 1</li>
            <li className='mb-3 lg:px-1 lg:py-3 border border-indigo-500' >navbar - 1</li>
            <li className='mb-3 lg:px-1 lg:py-3 border border-indigo-500' >navbar - 1</li>
            <li className='mb-3 lg:px-1 lg:py-3 border border-indigo-500' >navbar - 1</li>
            <li className='mb-3 lg:px-1 lg:py-3 border border-indigo-500' >navbar - 1</li>
            <li className='mb-3 lg:px-1 lg:py-3 border border-indigo-500' >navbar - 1</li>
          </ul>
        </div>
        <div className='w-[calc(100%-70px)] sm:w-[calc(100%-100px)] lg:w-[calc(100%-320px)] border h-full border-green-600'>Item - 2</div>
      </div>
    </section>
  )
}

export default Home