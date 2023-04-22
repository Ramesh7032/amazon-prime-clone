import React from 'react'
import "./Header.css"
import logo from "../amazon.jpg"

export default function header() {
  return (
    
    <div className="cls1" width='100%' > 
        <div className='img1'>
            <img src={logo} width={200} height={83} alt="rgr"/>
        </div>
        <div className='head'>
        <ul class="cls2">
            <li>Home</li>
            <li>Store</li>
            <li>Channels</li>
            <li>Categories</li>
            <li>My Stuff</li>
        </ul>
        <ul className='cls3'>
            <li><button className='btn0' >Try for Free</button></li>
            <li>Search</li>
            <li>SignIn</li>
            

            
        </ul>
        </div>
    </div>


    
  )
}
