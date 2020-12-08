import React from 'react';
import ReactLoading from "react-loading";


const LoadingStyle = "spin";
// ReactLoading: https://www.npmjs.com/package/react-loading
// https://juejin.cn/post/6844903789959315470

const Loading = () => (
  <div>
    <ReactLoading className="Loading d-none" type={LoadingStyle}/>
  </div>
)

export default Loading;