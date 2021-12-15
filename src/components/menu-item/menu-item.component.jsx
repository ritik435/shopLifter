
import React from 'react';
import './menu-item.styles.scss'

export const MenuItem = ({ imgUrl, title, size }) => (
    <div className={`${size} menu-item`} >
        <div
            className="background-Img"
            style={{ backgroundImage: `url(${imgUrl})` }}>
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div >
)