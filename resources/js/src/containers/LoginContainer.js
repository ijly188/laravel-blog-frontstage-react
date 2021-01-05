import { connect } from 'react-redux';
import Login from '../components/Login';

function mapStateToProps(state) {
  console.log('state', state)
  return {
    data: state.articleList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getArticalList() {
      dispatch({ type: 'GETARTICLELIST' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
