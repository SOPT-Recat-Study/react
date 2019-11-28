import React, {Component} from 'react';
import PageTemplate from './PageTemplate';
import Page2 from './Page2';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import DoneList from './DoneList';
import Clock from './Clock';

// const initialTodos = new Array(5000).fill(0).map(
//     (foo, index) => ({id: index, text: `일정${index}`, done: false})
// );

class App extends Component {

    state = {
        input:'',
        todos: [
            {id:0, text: '첫번째 일정입니다.', done: false},
            {id:1, text: '두번째 일정입니다.', done: false},
        ],
        dones: [
            {id:2, text: '세번째 일정입니다.', done: true}
        ]
    };

    onChangeHandler = (e) =>{
        const {value} = e.target;
        
        this.setState({
            input: value,
        });
    };

    id = 2;
    getId = ()=> ++this.id;


    dataInsertHandler = ()=>{
        const {todos, input} = this.state;
        if(input){
            const newTodos = [
                ...todos,
                {
                    id: this.getId(),
                    text: input,
                    done: false
                }
            ];

            this.setState({
                todos: newTodos,
                input: ''
            });
        }
    };

    done2TodoHandler = (id) =>{
        const {todos, dones} = this.state;
        const index = dones.findIndex(todo => todo.id === id);

        const toggled = {
            ...dones[index],
            done: !dones[index].done
        };

        const newDones = [
            ...dones.slice(0, index),
            ...dones.slice(index+1, dones.length)
        ];

        const newTodos = [
            ...todos,
            toggled
        ];

        this.setState({
            todos: newTodos,
            dones: newDones
        })
        
    };

    todo2DoneHandler = (id)=>{
        const {todos, dones} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        const newTodos = [
            ...todos.slice(0, index),
            ...todos.slice(index+1, todos.length)
        ];

        const newDones = [
            ...dones,
            toggled
        ];

        this.setState({
            todos: newTodos,
            dones: newDones
        })
    };

    dataTodoRemoveHandler = (id) =>{
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const newTodos = [
            ...todos.slice(0, index),
            ...todos.slice(index+1, todos.length)
        ];

        
        this.setState({
            todos: newTodos
        })
    };
    dataDoneRemoveHandler = (id) =>{
        const {dones} = this.state;
        const index = dones.findIndex(doned => doned.id === id);

        const newDones = [
            ...dones.slice(0, index),
            ...dones.slice(index+1, dones.length)
        ];

        this.setState({
            dones: newDones
        })
    };

    render() {
        const {input, todos, dones} = this.state;
        const {
            onChangeHandler, 
            dataInsertHandler, 
            done2TodoHandler,
            todo2DoneHandler, 
            dataTodoRemoveHandler,
            dataDoneRemoveHandler,
            doneInsertHandler
        } = this;

        // 위에서 설정한 state, onChangeHandler, dataInsertHandler를 InputTodo에 props로 전달
        return (
            <PageTemplate>

                <Clock/>

                <InputTodo 
                onChange = {onChangeHandler} 
                value = {input} 
                onInsert = {dataInsertHandler}/>

                <TodoList 
                todos = {todos} 
                onToggle = {todo2DoneHandler}
                onRemove = {dataTodoRemoveHandler}/>
                
                
                <Page2>

                    <DoneList
                    dones = {dones}
                    doneCheck = {doneInsertHandler}
                    onToggle2 = {done2TodoHandler}
                    onRemove2 = {dataDoneRemoveHandler}/>
                    
                </Page2>
                
            
            </PageTemplate>

        );
    }
}

export default App;