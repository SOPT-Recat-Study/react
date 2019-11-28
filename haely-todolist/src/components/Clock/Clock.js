import React, {Component} from 'react';
import LiveClock from 'react-live-clock';
import styles from './Clock.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Clock extends Component{

    render(){
        return(
            <div className = {cx('clock')}>
                <LiveClock format={'YYYY//MM/DD HH:mm:ss'}
                ticking = {true}/>
                
            </div>
        )
    }
}

export default Clock;
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('content')
// )