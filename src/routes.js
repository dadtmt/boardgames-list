import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import GamePage from './containers/GamePageContainer'
import BoardGamePage from './containers/BoardGamePageContainer'
import PlayerPage from './components/PlayerPage'
import AboutPage from './components/AboutPage.js'
import NotFoundPage from './components/NotFoundPage.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={GamePage}/>
    <Route path='boardgames' component={BoardGamePage}/>
    <Route path='players' component={PlayerPage}/>
    <Route path='about' component={AboutPage}/>
    <Route path='*' component={NotFoundPage}/>
  </Route>
)
