import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import BlogPic from '../BlogPic';
import Content from '../Content';

const IndexWrap = () => {
  return (
    <div className="app">
        <Header />
        <main>
            <div className="container">
                <BlogPic />
                <Route path="/" exact component={Content} />
            </div>
        </main>
        <Footer />
    </div>
  );
}
export default {IndexWrap};
export { IndexWrap };