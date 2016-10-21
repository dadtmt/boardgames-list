import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import AddGamePlayer from './AddGamePlayer'

const AddGamePlayers = ({fields, items}) => (
  <div>
    <button type='button' title='add game player' onClick={() => fields.push({})} >
      add a player to this game
    </button>
    {fields.map(
      (field, index) =>
        <div key={index}>
          <button
            type='button'
            title='remove game player'
            onClick={() => fields.remove(index)}
          >
            remove this game player
          </button>
          <Field name={field} component={AddGamePlayer} items={items} />
        </div>
    )}
  </div>
)

AddGamePlayers.propTypes = {
  fields: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
}

export default AddGamePlayers
