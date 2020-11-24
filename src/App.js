import './App.css';
import Home from "./components/Home";

import Portfolio from './components/oldPortfolio/OldPortfolio';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
// import * as Scroll from 'react-scroll';

function App() {
  return (

    <Router className="App">
        {/* <Header/>Took Header out so the Home can display independently from the Portfolio  */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
      {/* <Footer/> Took Footer out so the Home can display independently from the Portfolio  */}
    </Router>
    
  );
}

export default App;
