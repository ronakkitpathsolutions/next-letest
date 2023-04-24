import React from 'react'
import Sidebar from '../utilities/Sidebar'
import { Outlet } from 'react-router-dom';

const Menus = [
  { title: "Dashboard", src: "Chart_fill" },
  { title: "Inbox", src: "Chat" },
  { title: "Accounts", src: "User", gap: true },
  { title: "Schedule ", src: "Calendar" },
  { title: "Search", src: "Search" },
  { title: "Analytics", src: "Chart" },
  { title: "Files ", src: "Folder", gap: true },
  { title: "Setting", src: "Setting" },
];

const Home = ({ ...props }) => {
  return (
      <section className="flex bg-white" {...props} >
      <Sidebar {...{ Menus }} />
      <div className="h-screen flex-1 p-7">
        <Outlet/>
      </div>
    </section>
  )
}

export default Home