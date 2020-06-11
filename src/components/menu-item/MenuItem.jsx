import React from 'react';
import './MenuItem.styles.scss'

const MenuItem = ({ section }) => {
    return (
        <div className={`${section.size} menu-item`}>
            <div
                className='background-image'
                style={{ backgroundImage: `url(${section.imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{section.title.toUpperCase()}</h1>
                <a className='subtitle' href={section.linkUrl}>Shop Now</a>
            </div>
        </div>
    )
}

export default MenuItem

