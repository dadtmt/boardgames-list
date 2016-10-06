import initialState from './initialState';
import createReducer from './createReducer';
import {REMOVE_BOARDGAME} from '../constants/actionTypes';
import {deleteItemFromStateByAction} from './itemsUtils';

const handlers = {
  [REMOVE_BOARDGAME]: deleteItemFromStateByAction
};

export default createReducer(initialState.boardGames, handlers);
