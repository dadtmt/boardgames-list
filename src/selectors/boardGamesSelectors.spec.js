import { expect } from 'chai';
import {
  allBoardGamesSelector,
  boardGamesArraySelector
} from './boardGamesSelectors';

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

describe('boardGamesArraySelector', () => {
  it('should return an array with boardgames from state', () => {
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
    const expected = [
      {
        name: 'Dungeon Twister'
      },
      {
        name: 'Earth Reborn'
      }
    ];
    expect(boardGamesArraySelector(fakeState)).to.eql(expected);
  });
});
