import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/home'
import MovieDetail from './component/movieDetail'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" name="home" render={props => <Home {...props} />} />
          <Route exact path="/moviedetail" name="movie detail" render={props =><MovieDetail {...props} />} />
      </Switch>
    </Router>
  );
}


export default App;
