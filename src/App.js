import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeComponent}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
