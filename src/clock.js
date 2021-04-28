import ReactDOM from 'react-dom';
function Clock(props){
        return (
            <h2>现在是：{props.date.toLocaleTimeString()}</h2>
        )
    }
    
function tick(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    )
}

setInterval(tick(),1000)
