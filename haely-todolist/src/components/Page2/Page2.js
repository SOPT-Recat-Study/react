import React from 'react';
import styles from './Page2.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Page2 = ({children}) =>{
    return(
        <div className = {cx('page2')}>
            <h1>Done List</h1>
            <div className = {cx('content')}>
                {children}
            </div>
        </div>
    )
};

export default Page2;