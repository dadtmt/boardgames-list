import {connect} from 'react-redux';
import BoardGameList from '../components/BoardGameList';
import {boardGamesArraySelector} from '../selectors/boardGamesSelectors';

export function mapStateToProps(state){
  return {
    items: boardGamesArraySelector(state)
  };
}

export default connect(mapStateToProps)(BoardGameList);
export {BoardGameList as PureBoardGameListContainer};
