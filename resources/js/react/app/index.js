import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// as表示變數名稱代替
// import { HashRouter as Router, Route } from 'react-router-dom';
// 把下面這個打開網址就會變成#，在如果沒有幫你設定#的狀況就要用這個方式去處理

import Header from '../layouts/Header';
import Content from '../layouts/Content';
import Test from '../pages/Test';

// import Home from '../Home';
// import Menu from '../Menu';
// import Videos from '../Videos';
// import Footer from '../Footer';
// import Overlay from '../Overlay';

export default function App() {
    return (
        <Router>
            <div className="app">
                <div className="container">
                    <Route component={Header} />
                    <Route path="/" exact component={Content} />
                    <Route path="/video" component={Test} />
                {/* <Menu />
                <Route path="/" exact component={Home} />
                <Route path="/video" component={Videos} />
                <Route path="/video/:id" component={Overlay} />
                <Footer /> */}
                </div>
            </div>
        </Router>
    );
}
