import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import AboutAndSkills from './components/AboutAndSkills'
import Projects from './components/Projects';
import Footer from './components/Footer';
// import * as Scroll from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <AboutAndSkills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
