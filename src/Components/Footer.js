import React from 'react'
// import { Button } from './Button'
import './Footer.css';



function Footer() {
    const currentDate = new Date().getFullYear();
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                {/* <p className='footer-subcription-heading'>
                    jointhe adventure 
                </p>
                <p className='footer-subscription-text'>
                    you can unsubscribe
                </p> */}
                <div className='input-areas'>
                    <form>
                        {/* <input type='input-areas' name='email' placeholder='your email'
                        className='footer=input'/>
                        <Button buttonStyle='btn--outline'>subscibe</Button> */}
                        
                    </form>
                </div>

            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'></div>
                    <h2 className='copy_right'>&copy;{currentDate}</h2>
                </div>
            </div>

            
        </div>
    )
}

export default Footer

