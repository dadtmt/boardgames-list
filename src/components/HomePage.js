import React from 'react'
import BoardGameList from '../containers/BoardGameListContainer'
import AddBoardGameForm from '../components/AddBoardGameForm'

const HomePage = () => {
  return (
    <div>
      <h1>BoardGame List</h1>
      <AddBoardGameForm handleSubmit={()=>{}}/>
      <BoardGameList />
    </div>
  )
}

export default HomePage
