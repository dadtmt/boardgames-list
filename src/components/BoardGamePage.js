import React, { PropTypes } from 'react'
import { Alert } from 'react-bootstrap'
import AddBoardGame from '../containers/AddBoardGameContainer'
import BoardGameList from '../containers/BoardGameListContainer'

const BoardGamePage = ({ error }) => {
  return (
    <div>
      {error != '' && (<Alert bsStyle='danger'>{error}</Alert>)}
      <AddBoardGame />
      <BoardGameList />
    </div>
  )
}

BoardGamePage.propTypes = {
  error: PropTypes.string.isRequired
}

export default BoardGamePage
