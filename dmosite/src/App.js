import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/home'
import About from './components/pages/about'
import Signup from './components/pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/sign-up' exact component={Signup}/>
     
      </Switch>
    </Router>
  );
}

export default App;

