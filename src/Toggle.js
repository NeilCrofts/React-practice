
import React from 'react';
class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn:true}
        //将this.clickFun函数绑定this，让clikcFun函数内部的this指向当前this,能使用state
        //this.clickFun.bind(this) 前面this是找到clickFun，后面bind(this)是指明函数内部this
        // this.handleClick = this.clickFun.bind(this)
    }

    // clickFun(){
    //     // console.log(this);//Toggle
    //     this.setState(state=>({
    //         isToggleOn:!state.isToggleOn
    //     }))
    // }

    //定义时使用箭头函数
    handleClick=()=>{
        console.log(this);//Toggle
        this.setState(state=>({
            isToggleOn:!state.isToggleOn
        }))
    }

    render(){
        return(
            <button onClick={this.handleClick}
            //或者内部使用箭头函数
            // onClick={()=>{this.handleClick()}}
            >
                {this.state.isToggleOn ? 'On' : 'Off'}
            </button>
        )
    }
}

export default Toggle;