import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/css/reset.css";
import '@/assets/css/antd.css';
import 'element-theme-default';

import App from './App';


if (localStorage.getItem('Dark') === null){
  localStorage.setItem('Dark', false);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

