import { expect } from 'chai';
import {allBoardGamesSelector} from './boardGamesSelectors';

describe('allBoardGamesSelector', () => {
  it('should return boardGames from state', () => {
    const fakeState = {
      boardGames: {
        1: {
          name: 'Dungeon Twister'
        },
        2: {
          name: 'Earth Reborn'
        }
      }
    };
    expect(allBoardGamesSelector(fakeState)).to.eql(fakeState.boardGames);
  });
});
