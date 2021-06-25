import React from 'react';
import './ContactButton.css';
import { Link } from 'react-router-dom';

const STYLES =['bttn--primary', 'bttn--outline'];

const SIZES =['bttn--medium', 'bttn--large'];

export const ContactButton = ({
    children, 
    type, 
    onClick,
    buttonStyle, 
    buttonSize
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
        return(
            <Link  className='bttn-mobile'>
                <button className={`bttn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        );
    };