import React from 'react'
import './Footer.css'
import prime from '../prime.webp'

export default function footer() {
  return (  
    <div className='foot0'>
        <div className='foot1'>
        <img src={prime} className='primeimg1' alt='pictur' width={200} height={70}/>
        </div>
        <div className='foot2'>
            <p className='para1'> Terms and Privacy Notice </p>
            <p>Send us feedback</p>
            <p>Help</p>
        </div>
        <div className='final'>
            © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>

    </div>
    
  )
}
