import { connect } from 'react-redux';
import Article from '../../components/Article/Article';
import { 
  MID_GET_ARTICLE_LIST,
  MID_GET_ARTICLE_INFO
} from '../../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { 
    articleList,
    articleInfo
  } = state.articleState;

  return {
    articleList: articleList,
    articleInfo: articleInfo,
  };
}

const mapDispatchToProps = dispatch => ({
  getArticleList:(payload) => dispatch({ type: MID_GET_ARTICLE_LIST }),
  getArticleInfo:(payload) => dispatch({ type: MID_GET_ARTICLE_INFO })
});

// 把 state 跟 action function 綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(Article);
