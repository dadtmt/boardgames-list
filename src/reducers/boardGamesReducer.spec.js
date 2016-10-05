import { expect } from 'chai';
import reducer from './boardGamesReducer';
import initialState from './initialState';

describe('Reducers::boardGames', ()=> {

  const getInitialState = () => {
    return initialState.boardGames;
  };

  it('should set initialState by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).eql(expected);
  });
});
