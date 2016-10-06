import {expect} from 'chai';
import {REMOVE_BOARDGAME} from '../constants/actionTypes';
import {removeBoardGame} from './boardGamesActions';

describe('REMOVE_BOARDGAME action', () => {
  it('should create an action with REMOVE_BOARDGAME type and boardgame id in payload', () => {
    const expected = {
      type: REMOVE_BOARDGAME,
      payload: {
        id: 1
      }
    };
    expect(removeBoardGame(1)).to.eql(expected);
  });
});
