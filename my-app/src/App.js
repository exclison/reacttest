// import logo from './logo.svg';
import './App.css';
import ClassComponent from './pages/ClassComponent'
import FunctionComponent from './pages/FunctionComponent'
import SetStatePage from './pages/SetStatePage'
import LifeCyclePage from './pages/LifeCyclePage'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color:'#0089ff'}}>这是多么标准的十个字</p>
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
      </header> */}
      <div>
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <SetStatePage></SetStatePage>
      <LifeCyclePage></LifeCyclePage>
      </div>
    </div>
  );
}

export default App;
