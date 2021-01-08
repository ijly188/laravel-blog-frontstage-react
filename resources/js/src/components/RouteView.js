import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from '../routes'

class RouteRender extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 這裡的path跟exact會對應到 src/routes.js的json變數上 */}
        {routes.map((route, i) => {
          const { path, exact, routes } = route;
          return (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={(routeProps) => (
                <route.component routes={routes} {...routeProps} />
              )}
            />
          );
        })}
      </React.Fragment>
    )
  }
}

export default RouteRender;