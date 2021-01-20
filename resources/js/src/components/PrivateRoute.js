import { exact } from 'prop-types';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import routes from '../routes'

class PrivateRoute extends Component {
  render() {
    return (
      <Route 
        exact={exact}
        path={path}
        render={() => (
          isAuthenticated
            ? <Component />
            : <Redirect to={ {pathname: '/', state: {from: routeProps.location}} }/>
        )}
      />
    )
  }
}

export default PrivateRoute;