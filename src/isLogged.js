import React from "react"

function UserGreeting(){
    return <h1>Welcom Back</h1>
}

function GuestGreeting(){
    return <h1>Please Sign Up</h1>
}

class LoginToggle extends React.Component{
    constructor(props){
        super(props)
        this.state={isLogged:false}
    }
    clickLogin=()=>{
        this.setState({
            isLogged:true
        })
    }
    clickLogout=()=>{
        this.setState({
            isLogged:false
        })
    }
    render(){
        const isLogged=this.state.isLogged
        return(
            <div>
                {isLogged?<UserGreeting />:<GuestGreeting />}
                <button onClick={this.clickLogin}>LoginIn</button>
                <button onClick={this.clickLogout}>LoginOut</button>
            </div>
        )
    }
}



export default LoginToggle