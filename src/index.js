import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Toggle from './Toggle';
// import LoginToggle from './isLogged';
// import List from "./list"
// import NameForm from "./nameForm"
// import TemperatureInput from "./temperature"
import FancyBorder from "./childern_prop"


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




//输入 temperature 的值无效时，函数返回空字符串，反之，则返回保留三位小数并四舍五入
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
// //温度转换 
// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }
//父组件
// class Calculator extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {temperature: '', scale: 'c'};
//   }
//   handleCelsiusChange=(temperature)=>{
//     this.setState({scale: 'c', temperature})
//   }
//   handleFahrenheitChange=(temperature)=>{
//     this.setState({scale:'f',temperature})
//   }
//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;
//     return (
//       <div>
//         <TemperatureInput 
//         scale="c" 
//         temperature={celsius}
//         onTemperatureChange={this.handleCelsiusChange}
//         />
//         <TemperatureInput 
//         scale="f" 
//         temperature={fahrenheit} 
//         onTemperatureChange={this.handleFahrenheitChange}
//         />
//       </div>
//     );
//   }
// }


ReactDOM.render(
  // <App/>,
  // <Toggle/>,
  // <LoginToggle />,
  // <List />,
  // <NameForm />,
  // <Calculator/>,
  <FancyBorder>
    <h1>
        Welcome
      </h1>
      <p>
        Thank you for visiting our spacecraft!
      </p>
  </FancyBorder>,
  document.getElementById('root')
)


