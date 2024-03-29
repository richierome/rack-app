import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
// import racklogo from '../images/racklogo.png'

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);
const handleClick = () => setClick(!click);
const closeMobileMenue = () => setClick(false);

const showButton = () =>{
    if(window.innerWidth <= 960){
        setButton(false);
    } else{
        setButton(true);
    }
};

useEffect(() => {
    showButton()
},[]);

window.addEventListener('resize', showButton);


    return (
       <>
       <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'onClick={closeMobileMenue}> 
              RACK-App 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenue}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenue}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenue}>
                        Contact
                    </Link>
                </li>
                {/* <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenue}>
                        sign up
                    </Link>
                </li> */}
            </ul>
            {/* {button && <Button buttonStyle='btn--outline'>Sign UP</Button>} */}
        </div>
       </nav>
       </>
    )
}

export default Navbar;
