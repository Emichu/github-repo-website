import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Repos from '../pages/Repos';
import Main from '../pages/Main';
import Header from './Header';
import Repo from '../pages/Repo';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/repos" exact component={Repos} />
          <Route path="/repos/:id" exact component={Repo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;