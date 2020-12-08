import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { BlogPic } from '../BlogPic';
import { Content } from '../Content';

const IndexWrap = ({ routes }) => {
  return (
    <div className="app">
        <Header />
        <main>
            <div className="container">
              <Switch>
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
        </main>
        <Footer />
    </div>
  );
}
export default { IndexWrap };
export { IndexWrap };