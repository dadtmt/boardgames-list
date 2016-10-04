import {connect} from 'react-redux';
import BoardGameList from '../components/BoardGameList';

export function mapStateToProps(state){
  return {
    items: state.boardGames
  };
}

export default connect(mapStateToProps)(BoardGameList);
export {BoardGameList as PureBoardGameListContainer};
