import React from 'react'
import './Cards.css'
import ResponsivePlayer from './ResponsivePlayer';





function AboutCard() {
    return (
            <div>  
                <ResponsivePlayer  url='https://www.youtube.com/watch?v=w1N5tpJ31YA'/>
                <div className='cards'> 
                <p className='about__card__info'>Established in 2020 The RACK-App is a startup company based in Southern California.  
                We aim to assist and ease some of the frustrations and lack of communication between drivers and rack terminals.  
                Currently we are working with fuel and propane transport drivers across the United States and Canada. 
                <br/>
                <br/>
        
                </p>
            </div>
            <ResponsivePlayer  url='https://www.youtube.com/watch?v=I2C2sHqm43c'/>
            <div className='cards'> 
                <p className='about__card__info'>
                The RACK-App is a communication platform that connects and informs commercial truck drivers with daily alerts, 
                issues, news and updates that occur at any rack terminal. If you are a truck driver then you are fully aware on how the status at a rack terminal can quickly change without warning.
                <br/> 
                <br/>   
                The RACK-App was built and designed for driver-to-driver communication or facility-to-driver communication.  
                Drivers and or facility terminal officers can share, update and relay information regarding events, issues or changes that occur at a rack.  
                We are well aware of the loss of time and frustrations drivers endure when trying to load. Our goal is to provide a platform where drivers can be well informed before arrival and commitment to a load.
                <br/>
                <br/> 
                Know before you load! 
                </p>
            </div>

        </div>
 )
}

export default AboutCard;
