import React from 'react';
// import '~node_modules/nprogress/nprogress';
import './homePage.styles.scss';
import Directory from '../../components/directory/directory.component'

export const HomePage = (props) => (
    <div className='homepage'>
        <Directory />
    </div>
)
