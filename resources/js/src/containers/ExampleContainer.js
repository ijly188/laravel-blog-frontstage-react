import { connect } from 'react-redux';
import Example from '../components/Example';
import { changeArray, changeObject, changeString, changeInt } from '../actions'

const mapStateToProps = (state) => {
  const { array, object, string, int } = state.exampleState;
  return {
    array: array,
    object: object,
    string: string,
    int: int
  };
}

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, { changeArray, changeObject, changeString, changeInt })(Example);
