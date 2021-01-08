
//引入核心库
import React from 'react';
//ReactDOM
import ReactDOM from 'react-dom';
import './index.css';

//引入App组件
import App from './App';
// import reportWebVitals from './reportWebVitals';

//入口文件
//严格模式，语法检查
ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
