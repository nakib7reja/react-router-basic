import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import SideBar from '../SideBar/SideBar'

const Root = () => {
  return (
    <div className='bg-green-100 pt-10 h-screen text-center'>
      <Header></Header>
      <div className='w-[30%] mx-auto flex justify- gap-10'>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root