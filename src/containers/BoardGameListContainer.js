import {connect} from 'react-redux';
import BoardGameList from '../components/BoardGameList';
import {boardGamesArraySelector} from '../selectors/boardGamesSelectors';
import {removeBoardGame} from '../actions/boardGamesActions';

export function mapStateToProps(state){
  return {
    items: boardGamesArraySelector(state)
  };
}

export function mapDispatchToProps(dispatch){
  return {
    removeItem: (id) => dispatch(removeBoardGame(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardGameList);
export {BoardGameList as PureBoardGameListContainer};
