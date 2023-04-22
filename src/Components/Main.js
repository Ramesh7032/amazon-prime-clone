import React from 'react'
import ferzi from '../ferzi2.webp'
import varisu from '../varisu.jpeg'
import drushyam from '../drushyam.jpg'
import amaz from '../ama.png'
import amaz2 from '../ama2.png'
import ama5 from '../ama5.png'
import tab11 from '../tab1-1.jpg'
import tab12 from '../table1-2.jpg'
import tab13 from '../table1-3.jpg'
import tab21 from '../table2-1.jpg'
import tab22 from '../table2-2.jpg'
import tab23 from '../table2-3.png'
import tab31 from '../table3-1.png'
import tab32 from '../table3-2.jpg'
import tab33 from '../table3-3.jpg'
import tab41 from '../table4-1.png'
import tab42 from '../table4-2.png'
import tab43 from '../table4-3.jpg'
import siddu from '../siddu.png'
import './Main.css'

export default function Main() {
  return (
    <div className='main'>
    <div className='main1'>
        <div className='ferzi1'>
            <br>
            </br><br></br>
            <h1>welcome to Prime Video
            </h1>
            <p>Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
            <button className='btn'>Sign in to join Prime</button>
        </div>
        <div className='ferzi'>
            <img src={ferzi} width={600} height={500}/>
        </div>
        <div className='varisu'>
            <img src={varisu} width={300} height={300}/>
            <img src={drushyam} width={300} height={200}/>
        </div>
        
    </div>
    <div className='main2'>
        <div className='img2'>
        <img src={amaz} width={800} />
        </div>
        <div className='main2-1'>
            <br>
            </br>
            <h1>Movie rentals on Prime Video</h1>
            <p>Early Access to new movies, before digital subscription</p>
            <button className='btn1'>Rent now</button>
        </div>

    </div>
    <div className='main3' width='100%'>
        <div className='main3-1'>
      
      <p>Your favorite channels all in one place</p>
      <p className='p1'>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on Subscription to Channels of your choice</p>

    </div>
    <div className='main3-2'>
        <table>
            <tr>
                <td><img src={tab11} width={230}/></td>
                <td><img src={tab12} width={230}/></td>
                <td><img src={tab13} width={230}/></td>
            </tr>
            <tr>
                <td><img src={tab21} width={230}/></td>
                <td><img src={tab22} width={230}/></td>
                <td><img src={tab23} width={230}/></td>
            </tr>
            <tr>
                <td><img src={tab31} width={230}/></td>
                <td><img src={tab32} width={230}/></td>
                <td><img src={tab33} width={230}/></td>
            </tr>
            <tr>
                <td><img src={tab41} width={230}/></td>
                <td><img src={tab42} width={230}/></td>
                <td><img src={tab43} width={230}/></td>
            </tr>


        </table>
    </div>

    </div>
    <br></br>
    <div className='main4'>
        <div className='main4-1'>
            <img src={amaz2} width={600}/>
        </div>
        <div className='main4-2'>
            <p className='p2'> Even better with Fire TV Stick </p>
            <p className='p3'>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV.Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>
           <br></br>
            <button className='btn3'>Get started</button>
        </div>
    </div>
    <div className='main4-3'>
        <div className='main4-13'>
            <br></br>
            <br></br>
        
        <p className='p4'> Family Friendly</p>
        <p className='p5'>With easy to use parental controls and a dedicated kids page, enjoy secure,ad-free kids entertainment.Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls,and Chhota Bheem.</p>
    </div>
    <div className='main4-4'>
        <img src={siddu}  className='siddu' ></img>
    </div>
    </div>
    </div>
    

  )
}
