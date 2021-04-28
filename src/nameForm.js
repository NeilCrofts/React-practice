import React from 'react'
class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state={value:""}
    }
    handleChange=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit=(e)=>{
        alert("提交的名字："+this.state.value)
        e.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

export default NameForm