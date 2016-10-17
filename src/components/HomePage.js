import React from 'react'
// import GameList from '../containers/GameListContainer'
import BoardGameList from '../containers/BoardGameListContainer'
import AddBoardGame from '../containers/AddBoardGameContainer'
import PlayerList from '../containers/PlayerListContainer'
import AddPlayer from '../containers/AddPlayerContainer'

const HomePage = () => {
  return (
    <div>
      {/*<h1>Game List</h1>
      <GameList />*/}
      <h1>Player List</h1>
      <AddPlayer />
      <PlayerList />
      <h1>BoardGame List</h1>
      <AddBoardGame />
      <BoardGameList />
    </div>
  )
}

export default HomePage
