import React from 'react'
import Sidebar from '../utilities/Sidebar'
import { Outlet } from 'react-router-dom';


const Home = ({ ...props }) => {
  return (
      <section className="flex bg-white" {...props} >
      <Sidebar/>
      <div className="h-screen flex-1 p-7">
        <Outlet/>
      </div>
    </section>
  )
}

export default Home