import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import routes from '../../../routes';

export default class Member extends Component {
    render() {
        return (
            <div>
                Member
                {/* {routes.map((route, i) => {
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
                    })} */}
            </div>
        )
    }
}
