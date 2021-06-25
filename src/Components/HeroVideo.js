import React from 'react';
import ReactPlayer from 'react-player';
import './HeroVideo.css';

const HeroVideo =({url}) =>{
   
        return(
            <div className='player-wraper'>
                <ReactPlayer
                playing={true}
                muted={true}
                className='react-player'
                url={url}
                width='100%'
                height='100%'
               
                />
            </div>
        )
    }
export default HeroVideo;