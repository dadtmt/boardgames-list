import { expect } from 'chai';
import reducer from './boardGamesReducer';

describe('Reducers::boardGames', ()=> {

  const getInitialState = () => {
    return [];
  };

  it('should set initialState by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).eql(expected);
  });
});
