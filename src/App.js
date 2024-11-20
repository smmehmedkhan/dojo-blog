import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}