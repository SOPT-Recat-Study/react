
# Data 추가, 수정, 삭제

## 1. 데이터 추가
* TodoItem 추가
* input 자리에 내용을 입력하고 [추가] 버튼을 눌렀을 때 아래 리스트에 추가되도록!

~~~javascript
//App.js
id = 1;
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
~~~
input이 존재할 때 newTodos를 생성. `...todos` 로 기존의 todos 유지. text는 입력한 input 값, done은 false로 체크되지 않은 상태를 초기에 갖는다.

id는 1로 초기화한 후 `this.getId()`로 1씩 증가시킨다.

새로 추가한 데이터가 포함된 newTodos가 todos로 들어가고, input은 다시 빈칸으로 => `this.setState()`로 재구성!


## 2. 데이터 수정
* TodoItem 클릭 시 체크박스 활성화/비활성화 토글
* 클릭한 데이터의 id로 해당 객체를 찾고, done값을 변경시킨 뒤, state값 업데이트

~~~javascript
//App.js
toggleHandler = (id)=>{
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        const newTodos = [
            ...todos.slice(0, index),
            toggled,
            ...todos.slice(index+1, todos.length)
        ];
        this.setState({
            todos: newTodos
        })
    };
~~~
id값을 받아서 `todos.findIndex(todo => todo.id === id)`로 해당 객체의 index를 구한다. `toggled`로 해당 객체의 done(boolean)을 바꾼다.(true->false / false->true)

`newTodos`라는 새 배열을 만든다. `slice`를 사용해서 제일 처음(0)부터 해당 id의 객체(index) 전까지 자르고, 아까 만든 toggled를 붙이고, 그 뒤에 index+1부터 마지막(`todos.length`)까지 붙인다.

이렇게 변경된 newTodos를 todos에 넣고 이를 반영하기 위해 `this.setState()`를 사용!

## 3. 데이터 삭제
* [지우기]를 눌렀을 때 그 TodoItem을 삭제
* 클릭한 데이터의 id로 해당 객체를 찾고, 그 객체만 쏙 빼고 새로운 배열 생성하고, state값 업데이트

~~~javascript
//App.js
dataRemoveHandler = (id) =>{
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
~~~

id값 받아서 해당 객체의 index를 구한다. 새 배열인 newTodos를 생성. 이때, (0, index)와 (index+1, todos.length)를 이어붙인다. => index 자리만 빼고 새로 만든 배열!

setState로 newTodos 반영시킴.


***

## render()
* this.setState()를 할 때마다 컴포넌트는 리렌더링 된다.
* return 부분에서 위에 설정한 것들을 props로 전달. (onChangeHandler, input, dataInsertHandler를 InputTodo에 props로 전달)

~~~javascript
//App.js
render() {
        const {input, todos} = this.state;
        const {
            onChangeHandler, 
            dataInsertHandler, 
            toggleHandler, 
            dataRemoveHandler
        } = this;

        
        return (
            <PageTemplate>

                <InputTodo 
                onChange = {onChangeHandler} 
                value = {input} 
                onInsert = {dataInsertHandler}/>

                <TodoList 
                todos = {todos} 
                onToggle = {toggleHandler}
                onRemove = {dataRemoveHandler}/>
            </PageTemplate>
        );
    }
~~~

`input`, `todos`는 this.state로 , `onChangeHandler`, `dataInsertHandler`, `toggleHandler`, `dataRemoveHandler`는 this로 가져온다.

return에서 PageTemplate 안의 InputTodo와 TodoList에 필요한 해당 메소드들을 props로 뿌려준다.

* InputTodo.js 내부를 보면 다음과 같다.
~~~javascript
//InputTodo.js
const InputTodo = ({value, onChange, onInsert}) =>{ //3 props
    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){ //엔터 눌렀을 때 onInsert()
            onInsert();
        }
    };

    return(
        <div className = {cx('todo-input')}>
            <input onChange = {onChange} value = {value} onKeyPress = {handleKeyPress}/>
            <div className = {cx('add-button')} onClick = {onInsert}>추가</div>
        </div>
    )
};
~~~
App.js의 return 부분에서 InputTodo에 props로 넘겨줬던 value, onChange, onInsert를 사용.

`handleKeyPress`로 엔터를 눌렀을 때 onInsert()를 호출하는데, 이 onInsert()는 `onInsert = {dataInsertHandler}`이므로 데이터 추가 기능을 하게 된다.

return에서 `todo-input` 클래스 안에 `input`, `add-button`에 props를 넣어준다.
