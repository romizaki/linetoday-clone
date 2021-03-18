import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './page/Home';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
