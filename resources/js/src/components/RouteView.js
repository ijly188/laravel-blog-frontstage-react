import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import PrivateRoute from '../components/PrivateRoute';

class RouteView extends Component {
  render() {
    const { mainRoutes } = this.props;
    // console.log(mainRoutes);
    return (
      <Router history={history}>
        <Switch>
          {mainRoutes.map((route, i) => {
            return (
              !route.isAuth ? 
              // render ok
              <Route
                key={i}
                {...route}
                routes={route.routes}
              />
              :
              <PrivateRoute
                key={i}
                {...route}
                routes={route.routes}
              />
            )
          })}
        </Switch>
      </Router>
    )
  }
}

export default RouteView;