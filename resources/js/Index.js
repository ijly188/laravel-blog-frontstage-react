import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

// TODO
import App from './react/app';

const rootEl = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>, rootEl
);


// Hot Reloading
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./react/app', () => {
      const NextApp = require('./react/app').default;
      ReactDOM.render(<NextApp />, rootEl);
    });
  }
}
