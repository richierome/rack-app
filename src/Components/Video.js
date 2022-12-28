import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css';

const Video = () => {
    componentMount = () => {
      this.playVideo();
    };

    componentWillUnmount = () => {
        this.pauseVideo();
    };
 
    playVideo = () => {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();
      };

      pauseVideo = () => {
        // Pause as well
        this.refs.vidRef.pause();
      };

     
        return (
            
            <div className='hero-container'>
             <div className='video-container'>  
            <video 
              ref="vidRef"
              src='/videos/RACK-APP-drivers-2.mp4'
              type="video/mp4" 
            />

            <div className='hero-btns'>
              <Button onClick={this.playVideo} className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'> Play<i  className='far fa-play-circle'/>
              </Button>

              <Button onClick={this.pauseVideo} className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'> Pause <i  className='far fa-pause-circle'/>
              </Button>
            </div>
            </div>
          </div>
        );
      };
    }

 export default Video;