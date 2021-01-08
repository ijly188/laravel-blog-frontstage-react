import { connect } from 'react-redux';
import Example from '../components/Example';
import { getArray, getObject, getString, getInt } from '../actions'

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    array: state.exampleState.array,
    object: state.exampleState.object,
    string: state.exampleState.string,
    int: state.exampleState.int
  };
}

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, { getArray, getObject, getString, getInt })(Example);
