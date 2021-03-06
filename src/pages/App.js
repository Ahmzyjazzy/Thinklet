import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Provider } from '../context'
import { APP_DEFAULT_PORT } from '../constants'

//apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; //bind apollo to react i.e help react understand what apollo is doing

import './App.css';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Workspace from '../pages/Workspace'
import Instructor from '../pages/Instructor'
import EntityProfile from '../pages/EntityProfile'
import UserProfile from '../pages/UserProfile'
import NotFound from '../pages/NotFound'

//apollo client setup
const client = new ApolloClient({
  uri:`http://localhost:${APP_DEFAULT_PORT}/graphql`
})

class App extends Component {

  state = {
    userLogin: false,
    userDetail: {}
  }

  handleRegistrationComplete(data){
    console.log('...handlereg', this.state);
  }

  getContext = () => ({
    ...this.state,
    setUserRegInfo: this.handleRegistrationComplete,
  })

  render() {
    console.log( `...app state `, this.state );

    return (
      <ApolloProvider client={client}>
        <Provider value={this.getContext()}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/create-workspace"exact  component={Workspace} />
            <Route path="/instructor-signup" exact component={Instructor} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/profile" exact component={EntityProfile} />
            <Route path="/me" exact component={UserProfile} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Provider>
      </ApolloProvider>
    )
  }
}

export default App;
