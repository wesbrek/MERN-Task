import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/projects/Projects';
import NewUser from './components/auth/NewUser';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/new-user" component={NewUser} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
