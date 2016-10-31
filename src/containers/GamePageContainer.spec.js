import { expect } from 'chai'
import {
   mapStateToProps,
   mapDispatchToProps
 } from './GamePageContainer'
import { toggleUi } from '../actions/uiActions'

describe('GamePageContainer mapStateToProps', () => {
  it('should return {showForm: ui.gamePage.showForm}', () => {
    const fakeState = {ui: {
      gamePage: {
        showAddForm: true
      }
    }}

    const expected = {showAddForm: true}
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})

describe('AddBoardGameContainer mapDispatchToProps', () => {
  it('should return {onSubmit: function that dispatch addBoardGame}', () => {
    const fakeDispatch = (someFunction) => someFunction
    const expected = toggleUi(['gamePage', 'showAddForm'])
    expect(mapDispatchToProps(fakeDispatch)
    .onToggle()).to.eql(expected)
  })
})
