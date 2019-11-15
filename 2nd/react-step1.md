# React 프로젝트 시작하기

## 1. react가 왜 좋은가?!
웹사이트는 매우 빠른 속도로 복잡해지며 정보가 계속 많아질 수록 html코드가 굉장히 복잡해진다!  
계속해서 웹사이트가 변경될 때 마다 html 코드를 하나하나씩 찾아가서 수정하면서 업데이트 해줘야할까? 이건 너무 노가다!!   
react는 이러한 문제점을 완벽하게 해결해줄 수 있는 라이브러리다.  

### 사용자 정의 태그(시맨틱 태그)
```html
<html>
    <body>
        <header>
            <h3>시맨틱 태그</h3>
        </header>
        <content>
            <ul>
                <li><a href="">html</a> </li>
                <li><a href="">css</a> </li>
            </ul>
        </content>
    </body>
</html>
```
위의 `<header>` `<content>` 태그는 html 문법 태그가 아닌 사용자가 만든 시맨틱 태그이다.  
기능의 변화는 1도 없다!!  
이렇게 사용자 정의 태그를 만들어주는 것을 react가 도와준다. -> react에서는 이러한 태그를 **컴포넌트**라고 부른다.

**장점**
- 가독성
- 재사용성
- 유지보수

## 2. react 시작하기
www.reactjs.org  
공식문서에 익숙해져보자!~~(영어로된 문서는 너무 어렵다..하지만 읽어야한다..)~~

## 3. 개발환경 세팅하기
www.reactjs.org -> get started -> Create a New React App에 들어가보자!  
toolchain은 리액트로 앱을 개발할 때 개발하기까지 여러가지 개발환경,  
도구들을 모아서 한번에 제공해주는 편리한 도구들을 toolchain이라고한다.  
우리는 creat-react-app을 사용하여 react를 개발해보자! 

## 4. create-react-app 설치하기
npm을 사용하여 설치해보자!(yarn, npx 무엇을 사용하든 상관없다!)  
node.js를 설치했다면 npm을 사용할 수 있다.

* 공식 문서를 보면
`npx create-react-app`을 하라고 써 있는데
npm을 설치하면 npx도 자동으로 같이 설치된다.  
하지만 npx로 설치하게 되면 create-react-app을 다운받고 **1회용**으로 사용하고 지워버린다.  
이걸 왜 쓰냐면 **항상 최신버전**으로 설치하기 때문에!

#### npm 잘 설치됐는지 확인하기! 
`npm -v`

#### npm을 활용하여 create-react-app 설치해보기
- `Mac : sudo npm install -g create-react-app`  
- `Window : npm install -g create-react-app`

`sudo npm install -g create-react-app@2.1.8`로 버전을 명시해서 특정 버전을 설치할 수 있음 (명시하지 않으면 최신버전 설치)  
mac의 경우 global option으로 create-react-app을 설치하면 컴퓨터 어디서든 create-react-app이 사용 가능하다!(super user 권한으로 설치 필요)

#### 설치가 끝난 후!

터미널/ cmd에 `create-react-app --version` 입력해서 버전 정보가 잘 뜨면 설치 완료! 

## 5. react project 생성하기!
개발을 진행할 디렉토리로 이동한 후 react 프로젝트 생성 (*디렉토리명 react는 안됌!)  
`react-create-app [프로젝트]`

## 6. react sample website 실행하기!

우선 react를 실행시켜봅시다!

`npm run start`

하면 react saple website가 3000port로 열린다!
**localhost:3000**으로 접속!

## 7. 디렉토리 구조 설명

크게 **src**와 **public** 디렉토리가 있다. 
**public**이라는 디렉토리는 index.html이 있는 디렉토리다.  
index.html 코드를 보면 중간에 `<div id="root"></div>` 코드가 있는데 이 안에 우리가 만드는 컴포넌트가 들어간다.

**src**디렉토리안에 index.js 엔트리 파일을 보면 document.getElementById('root')를 기반으로 해서 index.html파일에서 위에서 언급한 id=root인 element를 가져온다.
`<APP />` 이것이 우리가 정의한 사용자 정의태그, 즉 **컴포넌트**다.  

컴포넌트를 보기 위해서 App.js파일을 보자  
컴포넌트는 **function 방식**과 **class 방식** 2가지로 구성할 수 있으며 약간의 차이점이 있다!  
차이점은 잠시후에 천천히 봐요 ㅎㅎ  

App.js의 App 컴포넌트 코드를 보자!
```jsx harmony
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
```
render() : 컴포넌트에 렌더링 될 데이터를 정의함, JSX 리턴  
render()에서 반환하고 있는 JSX를 보면 HTML 같지만, JavaScript 입니다.

https://babeljs.io 에 가서 변환해보면 오른쪽과 같은 js 코드로 변환이 됩니다!

XML 형태의 JSX 를 JavaScript 로 변환해야 하기 때문에 몇가지 규칙이 있어요!

## 8. JSX 문법

#### 태그 닫기

흔히 HTML에서 `input` 태그를 사용할 때 태그를 안닫는 경우가 있지만 리액트에서는 컴파일에 실패한다.

```jsx harmony
class App extends Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}
```

#### Element 감싸기

컴포넌트에서 여러 Element를 렌더링할 때 `container element` 안에 둬야한다.  
이 말은 즉슨 최상위 태그 하나만을 리턴해야된다! 라는 말로 해석할 수 있습니다!

```jsx harmony
// 에러
return  (
           <h1> Hello </h1>
           <h2> World </h2>
       );
// 2개의 태그를 return하면 error가 발생합니다.
// 성공
return  (
            <div>
              <h1> Hello </h1>
              <h2> World </h2>
            </div>
        );
// 이와같이 최상위 태그 <div>로 감싸서 return하면 됩니다!
```

#### JavaScript 사용

JSX 내부에 JavaScript 값을 사용해야 할 때는 `{ }` 를 사용한다.

```jsx
class App extends Component {
  render() {
    const name = "World"
    return (
      <div>
        <h1> Hello { name } </h1>
      </div>
    );
  }
}
```

#### 주석

 `//` or `{/* */}` 을 사용한다.


#### 조건문 사용

JSX 내부에서는 `if 문` 을 사용할 수 없다!! WHAT?!?!?!  
**삼항 연산자( ? : )** 와 **And 연산자(&&)** 를 사용하여 조건문을 사용한다.

```jsx harmony
// 삼항 연산자
class App extends Component {
  render() {
    const isVisible = true
    return (
      <div>
        {
            isVisible ? (<div> true </div>) : (<div> false </div>)
        }
      </div>
    );
  }
}
```

```jsx harmony

// And 연산자
class App extends Component {
  render() {
    const isVisible = true
    return (
      <div>
        {
            isVisible && (<div> true </div>)
        }
      </div>
    );
  }
}
```

- `삼항 연산자` 는 조건이 true, false 일 때 각각 다른 요소들을 보여줄 때 사용한다.
- `And 연산자` 는 조건이 true 일 때만 보여줄 경우에 사용한다.
- 복잡한 로직의 경우 JSX 밖에서 처리를 하고, JSX 내부에서 해야한다면 **IIFE(즉시실행되는 함수표현식)**  사용하자

## 9. function으로 컴포넌트를 구성할 경우와 class로 컴포넌트를 구성할 경우 차이점
component 의 종류 2종
 - class형 component : state, LifeCycle 사용 가능
 - function형 component : state, LifeCycle 사용 불가, class 형에 비해 속도가 약간 빠름, props 만 사용할 경우 선택

#### function component :  
컴포넌트 초기 마운트가 아주 미세하게 빠르고, 메모리 자원을 덜 사용합니다. 미세한 차이이니, 컴포넌트를 무수히 많이 렌더링 하게 되는게 아니라면 성능적으로 큰 차이는 없음.
    
```jsx harmony
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```
#### class component :
```jsx harmony
class App extends Component {
  render() {
    return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}
```

## 10. 컴포넌트 만들기

```jsx harmony
// Subject라는 컴포넌트를 생성
class Subject extends Component {
     render () { // 일반적인 js 함수는 function render()와 같이 선언하지만 최신 스펙의 js에서 class 안에 소속되어 있는 메소드는 function 키워드를 생략한다.
         return (
                 <header> // 컴포넌트를 만들때는 반드시 하나의 최상위 태그만 써야한다.
                     <h1>WEB</h1> 
                     world wide web!
                 </header>
         );
     }
 }

 //APP 컴포넌트에 Subject 컴포넌트 추가
class App extends Component {
    render () { 
        return (
                <Subject></Subject> // 이렇게 간편하게 표현이 가능하다.
        );
    }
}
```
현재 위 코드는 자바스크립트가 아닌 유사 자바스크립트 JSX다!  
JSX 코드를 작성하면 create-react-app이 자바스크립트로 convert해준다.  

## 11. style 과 CSS class

src/index.css파일이 index.html 파일의 css를 담당한다!  
src/App.css 파일은 App 컴포넌트의 css를 담당한다.

JSX 에서 style 과 CSS Class 를 설정하는건 기존에 HTML에서 하던 방식과는 다르다.

```jsx harmony
class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      color: 'white'
    };

    return (
      <div style={style}>
        Hello, World
      </div>
    );
  }
}
```

- inline으로 style을 넣어주는 경우는 위와 같이 처리한다.
- HTML에서 클래스를 설정할 때 class를 사용했다면 JSX에서는 className을 사용한다.

```jsx harmony
class App extends Component {
  render() {
    return (
      // class 대신에 className을 사용한다.
      <div className="title">
        Hello, World
      </div>
    );
  }
}
```

## 12. 배포(deploy)하는 방법

크롬의 개발자 도구에 들어가서 네트워크를 보면 웹사이트의 파일 용량이 어마어마하다!  

이렇게 큰 용량을 배포하기에는 많은 이슈가 발생하기 때문에 다른 방법이 필요하다.  

우리가 개발환경을 실행할 때 `npm run start`을 썻지만

enterprise application을 만들때는 `npm run build` 명령어로 실행한다.  

그러면 build라는 디렉토리가 생성된다.  

create-react-app이 우리가 개발한 코드를 빌드하여 용량을 확! 줄여서 제공해준다.  

실제로 사용할 때는 build 디렉토리 안의 코드를 사용한다.  

## 13. 리액트의 장점을 체감해보기!

```html
<html>
<body>
    <header> // 시맨틱 태그
        <h1>WEB</h1> // 천만줄이라고 가정하자
    </header>
    <nav>
        <ul>
            <li><a href="1.html">HTML</li>
            <li><a href="2.html">CSS</li>
            <li><a href="3.html">JAVASCRIPT</li>
        </ul>
    </nav>
    
    <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
    </article>
</body>
</html>
```

```html
<html>
<body>
    <header> </header>
    <nav></nav>
    <article></article>
</body>
</html>
```

첫만줄이 되는`<header>` `<nav>` `<article>` 들을 하나의 html에서 구현하지 않고!  
각각의 태그들을 컴포넌트로 구성하여 아래와 같이 간단하게 구현하여 유지보수, 재사용성, 가독성을 높일 수 있다!

## 14. react의 필수 개념 props

이제 제일 react의 필수 개념중 하나인 props에 대해 공부해봐요!

- 컴포넌트 속성을 설정 할때 사용하는 요소
- props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서만 설정 가능
- 부모로부터 받은 컴포넌트(자식 컴포넌트)는 해당 props 를 읽기 전용으로만 사용가능(**수정 불가**)


```jsx harmony
// 자식 컴포넌트 / props값 렌더링
// Subject.js
class Subject extends Component {
     render () { 
         return (
                 <header> // 컴포넌트를 만들때는 반드시 하나의 최상위 태그만 써야한다.
                     <h1>{this.props.title}</h1> // APP 컴포넌트에서 받은 props 접근 방식
                     {this.props.sub}
                 </header>
         );
     }
 }

 // 부모 컴포넌트 APP / props 설정
 // App.js
class App extends Component {
    render () { 
        return (
                <Subject title = "WEB" sub="hi"></Subject> // Subject 컴포넌트의 props값 설정, title, sub 추가
        );
    }
}
```

### default props 설정 방법
#### 1. class의 외부에서 설정하는 방법
```jsx harmony
class Subject extends Component {
     render () { 
         return (
                 <header> // 컴포넌트를 만들때는 반드시 하나의 최상위 태그만 써야한다.
                     <h1>{this.props.title}</h1> // APP 컴포넌트에서 받은 props 접근 방식
                     {this.props.sub}
                 </header>
         );
     }
 }
 // 만약 props값이 들어오지 않을 경우 사용되는 default props값 외부에서 설정하는 방법
 Subject.defaultProps = {
     title : 'default title',
     sub   : 'default sub'
 }
```
#### 2. class의 내부에서 설정하는 방법
```jsx harmony
class Subject extends Component {
    static defaultProps = {
     title : 'default title',
     sub   : 'default sub'
         }
     render () { // 일반적인 js 함수는 function render()와 같이 선언하지만 최신 스펙의 js에서 class 안에 소속되어 있는 메소드는 function 키워드를 생략한다.
         return (
                 <header> // 컴포넌트를 만들때는 반드시 하나의 최상위 태그만 써야한다.
                     <h1>{this.props.title}</h1> // APP 컴포넌트에서 받은 props 접근 방식
                     {this.props.sub}
                 </header>
         );
     }
 }
```
이렇게 컴포넌트에 속성을 정의해주면서 Subject의 컴포넌트에서 props를 통해서 데이터를 받아서 구현할 수 있다!

## 15. React Developer Tools

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi  


현재의 리액트 앱의 state를 확인할 수 있는 tool
react 홈페이지의 community 들어가면 tools가 있고 
debugging을 클릭! 개발중에 사용중인 브라우저를 선택하고 다운로드!
컴포넌트에 전달되는 props, state등을 실시간으로 확인하면서 개발할 수 있다.

설치 후 브라우저를 닫았다가 다시 키기!

## 16. state는 무엇인가?! 여기서부터는 해리님이 담당!

props는 사용자가 컴포넌트를 사용하는 입장에서 조작하는 거라고 한다면  (사용자입장)
state는 props의 값에 따라서 내부에 필요한 매커니즘 (사용자가 알 필요도 없고 알아서도 안됌)

어떠한 컴포넌트가 실행될 때 render() 함수보다 constructor()가 제일 먼저 호출되고 초기화를 담당한다.

```jsx harmony
// 1. constructor를 사용해서 state 초기화 하는 방법
constructor(props) {
    super(props);
    this.state = {
        subject: {title: "Web", sub: "World wide web"}
    }
}

// 2. class field 문법을 사용해서 state 초기화 하는 방법
state = {
    subject: {title: "web", sub: "World wide web"}
}
```

**리액트에서는 state의 값이 바뀌면 state를 가지고 있는 컴포넌트의 render()가 다시 호출된다.**


_**written by 재현**_




















