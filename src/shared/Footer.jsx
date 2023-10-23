import React from 'react'
import logo from "../assets/logo.svg"
import {FaFacebook} from "react-icons/fa"
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="footer text-white p-10 bg-[#151515] ">
  <aside>
    <img src={logo} alt="" />
    <p>Edwin Diaz is a software and web <br /> technologies engineer,
     a life coach trainer who is <br /> also a serial .</p>
     <div className='flex mt-3 gap-2 text-3xl'>  
        <div><FaFacebook /></div>
        <AiFillTwitterCircle />
        <AiFillInstagram />
        <AiFillLinkedin />
     </div>
  </aside> 
  <nav>
    <header className="font-medium text-white footer-title">About</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer