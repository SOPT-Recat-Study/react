import React, {Component} from 'react';
import DoneItem from '../DoneItem';

class DoneList extends Component{

    //리액트는 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링
    //이런 불필요한 리렌더링을 막기 위해 shouldComponentUpdate로 todos 비교해서 다를 경우만 true 리턴해서 리렌더링 될수 있게!
    //input폼 값 변경 시, 속도 개선
    shouldComponentUpdate(nextProps, nextState, nextContext){
        return this.props.dones !== nextProps.dones;
    }

    render(){
        const {dones, doneCheck, onToggle2, onRemove2} = this.props;
        const doneList = dones.map(doned =>{
            return <DoneItem
            key = {doned.id}
            done = {doned.done}
            onToggle2 = {()=> onToggle2(doned.id)}
            onRemove2 = {()=> onRemove2(doned.id)}
            doneCheck = {()=> doneCheck()}>
            {doned.text}
            </DoneItem>
        });

        return(
            <div>{doneList}</div>
            
        );
    }
}

export default DoneList;