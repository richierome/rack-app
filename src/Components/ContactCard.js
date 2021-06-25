import React from 'react';
// import CardItem from './CardItem'
import './Cards.css';
import './ContactButton.css';
// import {ContactButton} from './ContactButton'






function ContactCard() {

  
    

    return (
        <div className='cards'>
        <p className='contact__card__info'>Please contact us at rackdevops@gmail.com</p>
        <div className='cards__container'>
                <br/> 
            {/* <div className='hero-btns'>
              <ContactButton  className='bttns' buttonStyle='bttn--outline'
                buttonSize='bttn--large'> Email <i className='far fa-envelope'/>
              </ContactButton>
              </div> */}

            <button  
            style={{ padding: '12px 26px',borderRadius: '2px', backgroundColor: '#242424', 
            border: '1px solid #242424',}}>  
            <a style={{textDecoration: 'none', color:'white'}} href='mailto:rackdevop@gmail.com'>Email   <i className='far fa-envelope'/>
            </a>
            </button>



            {/* <button  
            style={{backgroundColor:'#242424', 
            padding: '15px 35px', 
            borderRadius: '25px', 
            outline: 'none',
             border: 'none'}}>       
            <a style={{textDecoration: 'none', color:'white'}} href='mailto:rackdevop@gmail.com'>Email</a>
            </button> */}
      
            {/* <div className='cards__wrapper'>
               <ul className='cards__items'>
                   <CardItem
                   src='images/contactlogo.png'
                   text='Connect With Us!'
                   label='email'
                   target='_blank'
                   aria-label='email'
                   />
                </ul> 
            </div> */}
        </div>
    </div>
    )
}

export default ContactCard;
