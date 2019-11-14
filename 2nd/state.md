# state, setState

## 1. state

* 동적인 데이터 다룰 때 사용.
* 컴포넌트 내부에서 수정해서 값을 바꿀 수 있음.
* (cf. props : 부모 컴포넌트에서 준 값을 자식이 그대로 받아만 오는 것)


~~~javascript
//App.js
state = {
    input:'',
    todos: [
        {id:0, text: '첫번째 일정입니다.', done: true},
        {id:1, text: '두번째 일정입니다.', done: false},
    ] //initial todos
};
~~~
input은 실제 입력값을 받을 자리이므로 비워두고, todos는 두 개의 더미 데이터로 초기화.

## 2. setState

* state에 있는 값을 바꾸기 위해서는 this.setState 필요
* 객체로 전달되는 값을 업데이트
* setState가 호출되면 컴포넌트가 리렌더링

~~~javascript
//App.js
onChangeHandler = (e) =>{
    const {value} = e.target;
    this.setState({
        input: value,
    });
};

render() {
    const {input, todos} = this.state;
    const {
        onChangeHandler
    } = this;

    // 위에서 설정한 state, onChangeHandler, dataInsertHandler를 InputTodo에 props로 전달
    return (
        <PageTemplate>
            <InputTodo 
            onChange = {onChangeHandler} 
            value = {input} />

            <TodoList 
            todos = {todos} />
        </PageTemplate>
    );
};
~~~
입력창인 input에 내용을 입력했을 때 InputTodo에 props로 바뀐 내용을 전달.
