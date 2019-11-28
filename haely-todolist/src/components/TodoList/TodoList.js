//TodoItem 데이터 배열을 컴포넌트 배열로 변환하고 렌더링

import React, {Component} from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component{

    //리액트는 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링
    //이런 불필요한 리렌더링을 막기 위해 shouldComponentUpdate로 todos 비교해서 다를 경우만 true 리턴해서 리렌더링 될수 있게!
    //input폼 값 변경 시, 속도 개선
    shouldComponentUpdate(nextProps, nextState, nextContext){
        return this.props.todos !== nextProps.todos;
    }

    render(){
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(todo =>{
            return <TodoItem
            key = {todo.id}
            done = {todo.done}
            onToggle = {()=> onToggle(todo.id)}
            onRemove = {()=> onRemove(todo.id)}>
            {todo.text}
            </TodoItem>
        });

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;