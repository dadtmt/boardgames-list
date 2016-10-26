import React from 'react'
import AddPlayer from '../containers/AddPlayerContainer'
import PlayerList from '../containers/PlayerListContainer'

const PlayerPage = () => {
  return (
    <div>
      <AddPlayer />
      <PlayerList />
    </div>
  )
}

export default PlayerPage
