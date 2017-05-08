import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer,
        FeedContainer, LogoutContainer, UserContainer,
        DuckDetailsContainer
      } from '../containers'

 const getRoutes = (checkAuth) =>
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <Route path='/auth' component={AuthenticateContainer} onEnter={checkAuth}/>
      <Route path='/feed' component={FeedContainer} onEnter={checkAuth} />
      <Route path='/logout' component={LogoutContainer} />
      <Route path='/:uid' component={UserContainer} onEnter={checkAuth} />
      <Route path='/duckDetail/:duckId' component={DuckDetailsContainer} onEnter={checkAuth} />
      <IndexRoute component={HomeContainer} onEnter={checkAuth}/>
    </Route>
  </Router>


export default getRoutes
