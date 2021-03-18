import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './page/Home';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/'>
              <Navbar/>
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
