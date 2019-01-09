import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login  from './container/Forms/Login/Login';
import Register  from './container/Forms/Regiester/Register';



class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Register" component={Register} />
          </Switch>
        </div>
      
    );
  }
}

export default App;
