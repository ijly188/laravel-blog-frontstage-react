import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { apiGetMemberInfo } from '../middleware/FrontStage/api';
import { apiGetMemberInfo } from '../actions/api/frontStageApi';

class PrivateRoute extends Component {
  // 預設通過登入驗證, 只有未通過的時候才擋
  state = {
    passCheck: true,
  }
  refreshToken(res) {
    if (res.headers.authorization) {
      const newBearerToken = res.headers.authorization;
      const newToken = newBearerToken.substring(7);
      localStorage.setItem('token', newToken);
    }
  }

  async componentDidMount(){
    if (this.props.isAuth) {
      await this.checkAuth();
    }
  }
  async checkAuth(){
    let token = localStorage.getItem('token');

    if (token === null || token === '' || token === undefined) {
      localStorage.removeItem('token');
      this.setState({
        passCheck: false,
      })
    } else {
      // call api確認身分
      await apiGetMemberInfo('get').then((res) => {
        // 雖然memberMiddleware裡有一個refreshToken(), 但在路由驗證的時候
        // store與redux相關的方法還沒bind上去所以這邊要額外寫一個refreshToken()不能使用memberMiddleware的function
        this.refreshToken(res);
        this.setState({
          passCheck: true,
        })
			}).catch((err) => {
        localStorage.removeItem('token');
        this.setState({
          passCheck: false,
        })
      })
    }
  }
  render() {
    const { i, routes } = this.props;
    return (
      this.state.passCheck ?
        <Route
          exact
          key={i}
          {...this.props}
          routes={routes}
        />
      : 
        window.location.href="/login"
    )
  }
}

export default PrivateRoute;