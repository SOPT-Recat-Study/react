# Component Life Cycle Methods

* 컴포넌트가 생성되고 사용되고 소멸될 때 까지 일련의 과정을 **생명주기** 라고 한다.
  이러한 생명주기 안에서는 특정 시점에 자동으로 호출되는 메서드가 있는데, 이를 **라이프 사이클 이벤트**라고 한다.

* **Props, State**값이 변화 될 때 컴포넌트에 많은 변화가 일어난다.
* 컴포넌트 **생성, 업데이트, 제거** 될 때 일어난다.
* DOM 혹은 페이지에 올라갈 때를 **마운트(Mount)**, 그 반대는 **언마운트(Unmount)** 라고 정의한다.
* 용도에 맞지 않는 메소드를 사용하면 React에서 자체적으로 에러 메시지를 띄워 준다. 



##**React** **Life Cycle**

![image](https://user-images.githubusercontent.com/41153567/69845538-5e13f180-12b4-11ea-8448-55d68eaca192.png)
![image](https://user-images.githubusercontent.com/41153567/69845550-65d39600-12b4-11ea-96c0-b7048755f67e.png)

- React Component의 생명주기
  - <u>실행 이벤트</u> 관점에서 **mount/update/unmount**로 구분 
  - <u>실행 단계</u> 관점에서는 **랜더링전/DOM 반영전/DOM 반영이후**로 구분 



### constructor

```js
constructor(props){
  super(props);
}
```

생성자 메소드로 컴포넌트가 생성될 때 단 한번만 실행된다. 이 메소드에서만 `state`를 설정할 수 있다.



### Mount

컴포넌트가 시작되면 우선 context, defaultProps와 state를 저장힌다. 그 후에  `componentWillMount ` 메소드를 호출합니다. 그리고  `render `로 컴포넌트를 DOM에 부착한 후 Mount가 완료된 후  `componentDidMount `가 호출된다.

1. state, context, defaultProps 저장

2. ### componentWillMount

   ```js
   componentWillMount(){
     console.log("componentWillMount");
   }
   ```

   React 엘리먼트를 실제 DOM 노드에 추가하기 직전에 호출되는 메소드다.
   DOM이 생성되지 않았으므로 DOM을 조작할 수 없고, `render`가 호출되기 전이기 때문에 **setState를 사용해도 render가 호출하지 않는다.** Mount중이므로, props나 state를 바꾸면 안 된다.

3. ### render()

   컴포넌트 렌더링

4. ### componentDidMount()

   ```js
   componentDidMount(){
     console.log("componentDidMount");
   }
   ```

   컴포넌트가 만들어지고 `render`가 호출된 이후에 호출되는 메소드이기때문에, **DOM**에 접근할 수 있습니다. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동을 한다.



### Props Update

업데이트되기 전에 업데이트가 발생하였음을 감지하고, **componentWillReceiveProps** 메소드가 호출됩니다. 그 후 **shouldComponentUpdate**, **componentWillUpdate**가 차례대로 호출된 후, 업데이트가 완료(**render**)되면 **componentDidUpdate**가 됩니다. <u>이 메소드들은 첫 번째 인자로 바뀔 props에 대한 정보를 가지고 있습니다.</u> componentDidUpdate만 이미 업데이트되었기 때문에 바뀌기 이전의 props에 대한 정보를 가지고 있습니다.

1. ### componentWillReceiveProps(nextProps)

   ```js
   componentWillReceiveProps(nextProps){
     console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
   }
   ```

   컴포넌트 생성후에 첫 렌더링을 마친 후 호출되는 메서드다. **컴포넌트가 처음 마운트 되는 시점에서는 호출되지 않는다.**
   `props`를 받아서 `state`를 변경해야 하는 경우 유용하다. **이 메소드 내부에서 setState를 사용해도 추가적인 렌더링이 발생하지 않는다.**

2. ### shouldComponentUpdate(nextProps, nextState)

   ```js
   shouldComponentUpdate(nextProps, nextState){
     console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
     return true;
   }
   ```

   컴포넌트 업데이트 직전에 호출되는 메소드다. props` 또는 `state가 변경되었을 때, 재랜더링을 여부를 return 값으로 결정한다. shouldcomponentUpdate에서는 아직 render하기 전이기 때문에 return false를 하면 render을 취소할 수 있다. 주로 여기서 **성능 최적화**를 한다.

3. ### componentWillUpdate(nextProps, nextState)

   ```js
   componentWillUpdate(nextProps, nextState){
     console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
   }
   ```

   `shouldComponentUpdate`가 불린 이후에 컴포넌트 업데이트 직전에서 호출되는 메소드이다. 새로운 props 또는 state가 반영되기 직전 새로운 값들을 받는다. 주의사항이 있는데, componentWillUpdate에서는 state를 바꿔서는 안 됩니다. 아직 props도 업데이트하지 않았으므로 state를 바꾸면 또 shouldComponentUpdate가 발생합니다. 따라서 **this.setState()를 사용하면 무한 루프가 일어나게 되므로** 사용하면 안된다. 

   ![image](https://user-images.githubusercontent.com/41153567/69845560-6ec46780-12b4-11ea-86ac-dbaf5e43bf75.png)

4. render

5. ### componentDidUpdate(prevProps, prevState)

   ```js
   componentDidUpdate(prevProps, prevState){
     console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
   }
   ```

   컴포넌트 업데이트 직후에 호출되는 메소드다. componentDidUpdate에서는 render이 완료되었기 때문에 **DOM**에 접근할 수 있습니다.



### State Update

setState 호출을 통해 state가 업데이트될 때의 과정이다. props update와 과정이 같지만, componentWillReceiveProps 메소드는 호출되지 않는다. 그리고 메소드의 두 번째 인자로는 바뀔 state에 대한 정보를 가지고 있다.

1. shouldComponentUpdate
2. componentWillUpdate
3. render
4. componentDidUpdate



### Unmount

componentWillUnmount()는 더는 컴포넌트를 사용하지 않을 때 발생하는 이벤트이다. 이미 제거된 컴포넌트에서 이벤트를 발생시킬 수는 없으므로, componentDidUnmount는 존재하지않는다. componentWillMount에서 주로 연결했던 이벤트 리스너를 제거하는 등의 여러 가지 정리 활동을 한다.

1. ### componentWillUnmount()

   ```js
   componentWillUnmount(){
     console.log("componentWillUnmount");
   }
   ```

   컴포넌트가 소멸된 시점에(DOM에서 삭제된 후) 실행되는 메소드다. 컴포넌트 내부에서 타이머나 비동기 API를 사용하고 있을 때, 이를 제거하기에 유용하다.

   

*기타!

### Error

에러 발생 시를 위한 componentDidCatch도 있습니다. 리액트 16에서 추가되었습니다.

```jsx
componentDidCatch(error, info) {
  console.error(error, info);
}
```

위와 같이 사용하고, 최상위 컴포넌트에 한 번만 넣어주면 됩니다. 에러 발생 시 어떻게 대처할 것인지를 정의할 수 있다. 



### getDerivedStateFromProps

**componentWillReceiveProps의 대체 역할**로 작성된 메서드로 컴포넌트가 인스턴스화 된 후, 새 props를 받았을 때 호출된다. 주의할 점으로 **setState**를 사용하는 것이 아닌 **값을 retrun** 해야한다. state를 갱신하는 객체를 반환할 수 있고, 새로운 props가 state 갱신을 필요로 하지 않음을 나타내기 위해 null을 반환할 수도 있다.



### getSnapshotBeforeUpdate 

**componentWillUpdate의 대체 역할**로 작성된 메서드로 DOM이 업데이트 직전에 호출된다. (이 라이프 사이클은 많이 필요하지 않지만, 렌더링되는 동안 수동으로 스크롤 위치를 유지해야할 때와 같은 경우에는 유용할 수 있다)



> **main.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));
 
setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 4000); //4초 후에 Unmount
```

> **App.js**

```javascript
import React from 'react';
 
class App extends React.Component {
 
  //constructor
   constructor(props) {
      super(props);
 
      this.state = {
         number: 0
      }
   };
 
   increaseNumber() {
      this.setState({number: this.state.number + 1})
   }
 
   render() {
      return (
         <div>
            <button onClick = {this.increaseNumber.bind(this)}>증가</button>
            <Content curNumber = {this.state.number}></Content>
         </div>
      );
   }
}
 
class Content extends React.Component {
 
  //mount
   UNSAFE_componentWillMount() {
     //컴포넌트 마운트 전
      console.log('Component WILL MOUNT!')           
   }
 
   componentDidMount() {
     //컴포넌트 마운트 후 (Render 실행 완료)
      console.log('Component DID MOUNT!')            
   }
 
   UNSAFE_componentWillReceiveProps(newProps) {
     //새로운 Props 받은 후
     console.log('Component WILL RECIEVE PROPS!')   
   }
 
  
  //update
   shouldComponentUpdate(newProps, newState) {       
     console.log(newProps, newState)
     return true;
     //True : 렌더링 O, False : 랜더링 X
   }
 
   UNSAFE_componentWillUpdate(nextProps, nextState) {       
     //컴포넌트 업데이트 전
      console.log('Component WILL UPDATE!');
   }
 
   componentDidUpdate(prevProps, prevState) {        
     //컴포넌트 업데이트 후 (Render 실행 완료)
      console.log('Component DID UPDATE!')
   }
 
  //unmount
   componentWillUnmount() {                          
     //컴포넌트 언마운트 전 
      console.log('Component WILL UNMOUNT!')
   }
 
   render() {
      return (
         <div>
            <h3>{this.props.curNumber}</h3>
         </div>
      );
   }
}
 
export default App;
```

![image](https://user-images.githubusercontent.com/41153567/69845564-7552df00-12b4-11ea-8872-8c748816da13.png)
![image](https://user-images.githubusercontent.com/41153567/69845571-7a179300-12b4-11ea-96f0-0de1fa1fdc61.png)