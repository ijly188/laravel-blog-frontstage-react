import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 後面可能可以加的就是polyfill，用來支援ie舊版本的東西

import App from './react/app';
import rootReducer from './react/state/reducers';

const store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 這層render重點在處理例外頁面轉導
// app.js檔案是laravel預設的不調整原有的東西去擴充，所以多做了一個 /app/index.js
// 這邊只要確定redux有灌進去就好了
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
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

// service worker