import React from 'react'
import './Cards.css'
import'./About.css'
import ResponsivePlayer from './ResponsivePlayer';





function AboutCard() {
    return (

            
            <div>  
                 <ResponsivePlayer  url='https://www.youtube.com/watch?v=olS6DsxcnBk'/>
                <div className='cards'> 
                <p className='about__card__info'> Latest Feature: "Station Routing" 
                <br/>
                <br/>Our solution to a common problem drivers come across when dispatched to a new delivery site.
        
                </p>
                </div>

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

                <br/> 
                <br/>
            
            <div id= "roadmap" class='row'>
                
            <h2>Roadmap</h2>
            
            
            <ul class= "roadmap">
            {/* <hr class="line-break"></hr> */}
                <li>  
                    <div class="roadmap-dot1 done1"></div>
                    <div class= "roadmap-panel">
                        <h4 class="map-title">1. Intro to industry</h4>
                        <p class="map-text">
                        We are taking the necessary steps of introducing ourselves to the fuel and oil industry.<br></br>
                        It's important that we reach our targeted audience and let them be aware of our services.
                        </p>
                    </div>
                    
                </li>
                <li class="roadmap-inverted">
                    <div class="roadmap-dot2 done2"></div>
                    <div class="roadmap-panel">
                        <h4 class="map-title">2. Feedback & inputs</h4>
                        <p class="map-text">
                            The team will be working directly with users on app interaction and UI experience.  <br></br>
                            We will also be adding rack terminal inputs and desired locations.
                            
                        </p>
                    </div>
                </li>
                <li>
                    <div class="roadmap-dot3 done3"></div>  
                    <div class= "roadmap-panel">
                        <h4 class="map-title">3. Nationwide marketing</h4>
                        <p class="map-text">
                            We will be launching a marketing campaing to reach as many drivers across the United States and surrounding regions.<br></br>
                            We are working hard and committed in providing a information service and communication platform for all fuel haulers.
                             
                        </p>
                    </div>
                </li>
                <li class="roadmap-inverted">
                    <div class="roadmap-dot4 done"></div>
                    <div class="roadmap-panel">
                        <h4 class="map-title">4. Advanced features</h4>
                        <p class="map-text">
                        Our long term goals are dedicated to introduce new technologies and advanced features to further assist drivers in conducting a more efficient way of loading, terminal to station navigation and resources to station information.
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </div>
 )
}

export default AboutCard;
