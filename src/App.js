import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import AboutAndSkills from './components/AboutAndSkills'
// import * as Scroll from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <AboutAndSkills/>
    </div>
  );
}

export default App;
