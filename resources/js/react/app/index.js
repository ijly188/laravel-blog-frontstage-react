import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../../sass/app.scss';
import routes from '../../router.js';

class App extends Component {
    render() {
        return (
            <div className="app">
                {console.log(routes)}
                {/* Refactor for using routes config */}
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
            </div>
        );
    }
}

export default App;