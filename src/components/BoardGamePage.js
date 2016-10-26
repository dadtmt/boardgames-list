import React from 'react'
import AddBoardGame from '../containers/AddBoardGameContainer'
import BoardGameList from '../containers/BoardGameListContainer'

const BoardGamePage = () => {
  return (
    <div>
      <AddBoardGame />
      <BoardGameList />
    </div>
  )
}

export default BoardGamePage
