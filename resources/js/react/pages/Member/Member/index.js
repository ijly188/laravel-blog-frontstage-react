import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { MemberDetail } from '../MemberDetail';

const Member = ({ routes }) => {
  return (
    <div className="member-root">
        <h3 className="display-3">Member</h3>
        <Link to="/">home</Link>
        <Link to="/member/detail">memberdetail</Link>
        {/* <Route path="/member/detail" component={MemberDetail} /> */}
        <Switch>
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
        </Switch>
    </div>
  );
}
export default { Member };
export { Member };