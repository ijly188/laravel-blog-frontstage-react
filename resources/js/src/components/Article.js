import React from 'react';
// 接收到LoginContainer的props變數跟function綁上Component
const Article = ({
  // state
  articleList, articleInfo,
  // function
  getArticleList, getArticleInfo
}) => {
  return (
    <section>
      <h3>文章列表</h3>
      {/* {console.log(props)} */}
      {/* 這裡的props.getArticalList正是LoginContainer設定好的action dispatch function */}
      <button onClick={getArticleList}>取得文章列表</button>
      <button onClick={getArticleInfo}>取得單篇文章資料</button>
      <div>articleList: 
        {articleList.length ? 
          console.log(articleList)
         :
         null
        }</div>
      <div>articleInfo: {articleInfo}</div>
    </section>
  );
}

export default Article;