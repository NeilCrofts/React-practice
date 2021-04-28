import React from "react"

//状态提升 子传父 让父亲来控制多个子组件的数据

  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  //子组件
class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
    }
    
    handleChange=(e)=>{
        //向父组件传递温度
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        //从父组件获取温度
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput