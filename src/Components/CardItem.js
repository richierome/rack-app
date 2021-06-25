import React from 'react'
import {Link} from 'react-router-dom';



const CustomLink = (props) => {
    const {children, className, path, href, target} = props
    if (href) {
        return (
            <a className={className} href={href} target={target ? target : '_self'}>
                {children}
            </a>
        )
    }
    return (
        <Link className={className} to={path}>
            {children}
        </Link>
    )
}



function CardItem(props) {
    
    return (
        <>
        
            <li className="cards__item">
                <CustomLink className='cards__item__link' path={props.path} href={props.href} target={props.target}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                       <img 
                       src={props.src} 
                       alt="phone"
                       className='cards__item__img'
                       
                       /> 
                    </figure>
                    <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </CustomLink>
            </li>
        </>
    )
}

export default CardItem
