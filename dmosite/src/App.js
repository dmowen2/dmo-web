import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/home'
import About from './components/pages/about'
import Blog from './components/pages/blog';
import Resume from './components/pages/resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/blog' exact component={Blog}/>
        <Route path='/resume' exact component={Resume}/>
     
      </Switch>
    </Router>
  );
}

export default App;

