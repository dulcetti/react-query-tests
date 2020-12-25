import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
