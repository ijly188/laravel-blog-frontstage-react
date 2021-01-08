import { connect } from 'react-redux';
import Login from '../components/Login';
import { getArticleList, getArticleInfo } from '../actions'

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    data: state.articleList,
  };
}

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, { getArticleList, getArticleInfo })(Login);
