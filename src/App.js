function handleClick(e){
  console.log("点击")
  e.preventDefault();
}

function App() {
  return (
    <div>
        <h1>
          Learn React
        </h1>
        <a href="https://www.baidu.com" onClick={handleClick}>百度一下</a>
    </div>
  );
}


export default App;
