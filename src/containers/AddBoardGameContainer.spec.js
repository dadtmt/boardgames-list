import {expect} from 'chai'
import {
   mapStateToProps,
   mapDispatchToProps
 } from './AddBoardGameContainer'
import {addBoardGame} from '../actions/boardGamesActions'

// TOFIX unable to apply because o redux-form
// TypeError: Cannot read property 'contextTypes' of undefined
// describe('<AddBoardGameContainer />', () => {
//   it.only('should renders same as <AddBoardGame />', () => {
//     const wrapperContainer = shallow(
//       <PureAddBoardGameContainer addItem={() => {}} />
//     )
//     const wrapper = shallow(<AddBoardGame />)
//     expect(wrapperContainer.html()).to.equals(wrapper.html())
//   })
// })

describe('AddBoardGameContainer mapStateToProps', () => {
  it('should return {}', () => {
    const fakeState = {}

    const expected = {}
    expect(mapStateToProps(fakeState)).to.eql(expected)
  })
})

describe('AddBoardGameContainer mapDispatchToProps', () => {
  it('should return {onSubmit: function that dispatch addBoardGame}', () => {
    const fakeDispatch = (someFunction) => someFunction
    const expected = addBoardGame({name: 'some boardgame'})
    expect(mapDispatchToProps(fakeDispatch)
    .onSubmit({name: 'some boardgame'})).to.eql(expected)
  })
})
