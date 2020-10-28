
import './App.css';
import Main from './pages/Main';
import Header from './compontent/Header'
import MyProject from './compontent/MyProject';
import Skills from './compontent/Skills';
import * as ReactBootStrap from 'react-bootstrap'

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      
        <Skills />
        <MyProject />

      
    </div>
  );
}

export default App;
