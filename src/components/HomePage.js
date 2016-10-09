import React from 'react'
import BoardGameList from '../containers/BoardGameListContainer'
import AddBoardGame from '../containers/AddBoardGameContainer'

const HomePage = () => {
  return (
    <div>
      <h1>BoardGame List</h1>
      <AddBoardGame />
      <BoardGameList />
    </div>
  )
}

export default HomePage
