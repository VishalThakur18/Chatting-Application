import React from 'react'
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"
import { useSelector } from 'react-redux'

export const Sidebar = () => {
  const { darkMode } = useSelector((state) => state.mode);

  return (
    <div className={`${darkMode ? 'sidebar' : 'sidebar_Light'}`}>
        <Navbar />
        <Search />
        <Chats />
    </div>
  )
}

export default Sidebar;