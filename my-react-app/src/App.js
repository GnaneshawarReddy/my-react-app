import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import TopRated from './Components/TopRated';
import Header from './Components/Header';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/top-rated" component={TopRated} />
      </Switch>
    </div>
  </Router>
);

export default App;
