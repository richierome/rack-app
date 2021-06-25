import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
   
    return (
        <div   className='cards' >
            <h1>Learn More</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                   <ul className='cards__items'> 
                   
                       <CardItem 
                       src='/images/connect.png'
                       text='Try the App!'
                       label='Connect'
                       href='http://rack-dev.com/'
                       target='_blank'
                       aria-label='website'
                       />
                  
                       <CardItem 
                       src='/images/backdrop.png'
                       text='Our Story'
                       label='About'
                       path='/about'
                       />
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default Cards
