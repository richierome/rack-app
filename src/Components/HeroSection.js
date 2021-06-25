import React, {useState} from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css';
import {Link} from 'react-router-dom'
import HeroVideo from './HeroVideo';





function HeroSection() { 
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    
    return (
        
        <div >
           
               <HeroVideo  url='https://www.youtube.com/watch?v=w1N5tpJ31YA'/> 
           
            {/* <HeroVideo  url='https://www.youtube.com/watch?v=w1N5tpJ31YA'/> */}
            
          
          
           {/* <video src='videos/RACK-APP-drivers-1.mp4' muted autoPlay loop/> */}
           {/* <h1>ADVENTRUE AWAITS</h1>
           <p>Learn More</p> */}
           {/* <div className='hero-btns'> */}
               {/* <Button className='btns' buttonStyle='btn--outline'
               buttonSize='btn--large'>Get Started
               </Button> */}
               {/* <Link to='/about'>
                <Button onClick={handleClick} className='btns' buttonStyle='btn--outline'
                 buttonSize='btn--large'>Watch trailer <i className='far fa-play-circle'/>
                </Button>
                </Link> */}

           {/* </div> */}
        </div>
    )
}


export default HeroSection;
