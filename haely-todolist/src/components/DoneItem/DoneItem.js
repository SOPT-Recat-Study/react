import React, {Component} from 'react';
import styles from './DoneItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class DoneItem extends Component {

    //하나의 아이템만 토글했는데 모든 todoItem이 리렌더링 되는것 방지
    shouldComponentUpdate(nextProps, nextState, nextContext){
        return this.props.done !== nextProps.done;
    }

    render(){
        const {done, children, onToggle2, onRemove2} = this.props;
        //비구조화 할당으로 this.props 안붙이고 props들 사용 가능

        return(
            <div className = {cx('done-item')} onClick = {onToggle2}>
                <input className = {cx('tick')} type = "checkbox" checked = {done} readOnly/>
                <div className = {cx('text', {done})}>{children}</div>
                <div className = {cx('delete')} onClick = {(e) =>{
                    onRemove2();
                    e.stopPropagation();
                }}>[x]</div>
            </div>
        );
        //onClick = {onRemove} 이렇게 하면 [지우기] 눌러도 삭제가 아니라 토글됨
        //TodoList(부모)랑 TodoItem(자식)이 둘다 onClick 메소드 존재 -> propagation 발생
        // 자식 요소의 onClick 내부에서 e.stopPropagation 호출하기!! 
    }
}

export default DoneItem;