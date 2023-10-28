import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../shared/Navber'
import Footer from '../shared/Footer'

const Mainlayout = () => {
  return (
    <div className='max-w-7xl px-6 md:px-10 lg:px-14 mx-auto'>
      <Navber />
        <Outlet />
      <Footer />
    </div>
  )
}

export default Mainlayout