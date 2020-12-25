import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
