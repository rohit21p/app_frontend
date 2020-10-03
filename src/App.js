import React from 'react';
import { Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/appbar';
import Home from './components/home';

function App() {
  return (
    <Grid container direction="column">
      <AppBar />
      <Switch>
        <Route exact path="/login" render={() => <h1>Login</h1>} />
        <Route path="/" component={Home} />
      </Switch>
    </Grid>
  );
}

export default App;
