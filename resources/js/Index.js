import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import configureStore from './src/store/configureStore';

// 後面可能可以加的就是polyfill，用來支援ie舊版本的東西

import App from './src/App';

// const store = configureStore();

// 這層render重點在處理例外頁面轉導
// app.js檔案是laravel預設的不調整原有的東西去擴充，所以多做了一個 /app/index.js
// 這邊只要確定redux有灌進去就好了
render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);

// service worker