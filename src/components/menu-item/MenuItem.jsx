import React from 'react';
import './MenuItem.styles.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ section, history, match }) => {
    return (
        <div
            className={`${section.size} menu-item`}
            onClick={() => history.push(`${match.url}${section.linkUrl}`)}>
            <div
                className='background-image'
                style={{ backgroundImage: `url(${section.imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>
                    {section.title.toUpperCase()}
                </h1>
                <span className='subtitle'>
                    Shop Now
                </span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)

