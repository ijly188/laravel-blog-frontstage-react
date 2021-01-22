import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';


class PrivateRoute extends Component {
  render() {
    const { i, isAuth, breadcrumbName, component, exact, path, routes } = this.props;
    // let AuthResult = isAuth ? checkwithlocalstorage : false;
    let AuthResult = false;
    // console.log(this.props);
    console.log(routes)
    return (
      AuthResult ?
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