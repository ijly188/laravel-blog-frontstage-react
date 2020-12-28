import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <React.Fragment>
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

export default App;