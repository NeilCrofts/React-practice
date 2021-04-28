import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Toggle from './Toggle';
// import LoginToggle from './isLogged';
// import List from "./list"
import NameForm from "./nameForm"


// function GetGreeting(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }
// function App(props){
//   return (
//     <div>
//       <GetGreeting name="a" />
//       <GetGreeting name="b" />
//       <GetGreeting name="v" />

//     </div>
//   )
// }
// const element = <GetGreeting name="John" />
// ReactDOM.render(
//     <App />,
//     // element,
//     document.getElementById('root')
// );
//Clock组件 函数形式
// function Clock(props){
//   return (
//       <h2>现在是：{props.date.toLocaleTimeString()},更新by {props.name}</h2>
// )
// }

//Clock组件 class形式
// class Clock extends React.Component{
//   render(){
//     return (
//       <h2>现在是：{this.props.date.toLocaleTimeString()},更新by {this.props.name}</h2>
//     )
//   }
// }

//将数据存到state中
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state ={date:new Date(),name:'crofts'};
  }

  componentDidMount(){
    this.timerID = setInterval(
        ()=>this.tick(),
        1000
      )
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date:new Date()
    })
  }

  render(){
    return (
      <h2>现在是：{this.state.date.toLocaleTimeString()},更新by {this.state.name}</h2>
    )
  }
}

// function tick(){
//   ReactDOM.render(
//     <Clock date={new Date()} name="neil" />,
//     <Clock/>,
//     document.getElementById('root')
//   )
// }
// setInterval(tick,1000)

// ReactDOM.render(
//   <Clock/>,
//   document.getElementById('root')
// )

ReactDOM.render(
  // <App/>,
  // <Toggle/>,
  // <LoginToggle />,
  // <List />,
  <NameForm />,
  document.getElementById('root')
)
