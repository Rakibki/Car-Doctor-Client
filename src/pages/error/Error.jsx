import React from 'react'
import Navber from "../../shared/Navber"
import ErrorImg from "../../assets/404.jpg"

const Error = () => {
  return (
    <div>
        <Navber />
        <div className='w-full h-[600px]'>
            <img className='w-full h-full' src={ErrorImg} alt="" />
        </div>
    </div>
  )
}

export default Error