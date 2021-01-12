import { connect } from 'react-redux';
import Article from '../components/Article';
import { MID_GETARTICLELIST, MID_GETARTICLEINFO } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { articleList, articleInfo } = state.articleListState
  return {
    articleList: articleList,
    articleInfo: articleInfo,
  };
}

const mapDispatchToProps = dispatch => ({
  getArticleList:(payload) => dispatch({ type: MID_GETARTICLELIST }),
  getArticleInfo:(payload) => dispatch({ type: MID_GETARTICLEINFO })
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(Article);
