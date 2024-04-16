  Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
 40 changes: 18 additions & 22 deletions40  
Lesson03/event-demo/src/App.js
@@ -1,25 +1,21 @@
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import tl_EventForm1 from './components/tl_EventForm1';
import tl_EventForm2 from './components/tl_EventForm2';
import tl_EventForm3 from './components/tl_EventForm3';
import tl_EventForm4 from './components/tl_EventForm4';

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
class App extends Component {
  render() {
    return (
      <div className='container'>
          <h1>Event Form Demo</h1>
          <tl_EventForm1 />
          <tl_EventForm2 />
          <tl_EventForm3 />
          <tl_EventForm4 name="lth thu4
            " />
      </div>
    );
  }
}

export default App;
export default App;
 26 changes: 26 additions & 0 deletions26  
Lesson03/event-demo/src/components/tl_EventForm1.js
@@ -0,0 +1,26 @@
import React, { Component } from 'react';

class tl_EventForm1 extends Component {

    // Hàm xử lý sự kiện
    eventHandleClick1 = ()=>{
        alert("event handle 1");
    }
    eventHandleClick2(){
        alert("Event Click 2")
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Event handle</h2>
                {/* gọi hàm xử lý sự kiện khi render  */}
                {/* <button onClick={this.eventHandleClick1()}>Click 1</button> */}
                {/* Gọi hàm xử lý khi click  */}
                <button onClick={this.eventHandleClick2}>Click 2</button>
            </div>
        );
    }
}

export default tl_EventForm1;
 18 changes: 18 additions & 0 deletions18  
Lesson03/event-demo/src/components/tl_EventForm2.js
@@ -0,0 +1,18 @@
import React from 'react'

export default function tl_EventForm2() {

    // Định nghĩa các hàm xử lý sự kiện
    const eventHandleClick1 = (content)=>{
        console.log('====================================');
        console.log(content);
        console.log('====================================');
    }
  return (
    <div className='alert alert-success'>
      <h2>Event Demo - Function Component</h2>
        <button onClick={eventHandleClick1("lth thu")}>Gọi khi render</button>
        <button onClick={()=>eventHandleClick1("K22CNT1-ReactJs")}>Gọi khi click </button>
    </div>
  )
}
 36 changes: 36 additions & 0 deletions36  
Lesson03/event-demo/src/components/tl_EventForm3.js
@@ -0,0 +1,36 @@
import React, { Component } from 'react';
// Xử lý sự kiện với props, state
class tl_EventForm3 extends Component {
    constructor(props){
        super(props);
        // Tạo đối tượng dữ liệu thông qua state
        this.state = {
            name:"lth thu",
            job:"Dev soft"
        }
    }

    // hàm xử lý sự kiện
    handleChangeName = (ev)=>{
        this.setState({
            name:"K22CNT1-ReactJs"
        })
    }
    handleChangeJob=()=>{
        this.setState({
            job:"Công nghệ phần mềm",
        })
    }
    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Thay đổi dữ liệu trong state</h2>
                <p>Dữ liệu:{this.state.name} - {this.state.job}</p>
                <button onClick={this.handleChangeName}>Thay đổi name</button>
                <button onClick={this.handleChangeJob}>Thay đổi job</button>
            </div>
        );
    }
}

export default tl_EventForm3;
 28 changes: 28 additions & 0 deletions28  
Lesson03/event-demo/src/components/tl_EventForm4.js
@@ -0,0 +1,28 @@
import React, { Component } from 'react';

class tl_EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"thu le"
        }
    }

    handleGetName = ()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Lấy dữ liệu từ props</h2>
                <button onClick={this.handleGetName}>Lấy tên</button>
                <h2>Welcome to , {this.state.name}</h2>
            </div>
        );
    }
}

export default tl_EventForm4;# reactthu
