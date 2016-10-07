import React from 'react'
import {Link} from 'react-router'
import BoardGameList from '../containers/BoardGameListContainer'

const HomePage = () => {
  return (
    <div>
      <h1>BoardGame List</h1>
      <BoardGameList />
      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to='fuel-savings'>demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  )
}

export default HomePage
