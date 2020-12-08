import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loading from '../ui/containers/common/Loading';
import '../../../sass/app.scss';

// import routes from '../../router.js';
import Login from '../ui/views/pages/login/Login';
import Register from '../ui/views/pages/register/Register';
import Page404 from '../ui/views/pages/pageError/page404/Page404';
import Page500 from '../ui/views/pages/pageError/page500/Page500';

// The container
import Layout from '../ui/containers/Layout';

// 這層用來做例外處理跟引入router
// 就是先處理可能會有不同版型的地方
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* 用來處理fetch loading */}
        <React.Suspense fallback={Loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
            <Route path="/" name="Home" render={props => <Layout {...props}/>} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;