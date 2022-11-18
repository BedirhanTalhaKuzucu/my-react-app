import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/open-iconic-bootstrap.min.css";
import "./styles/bootstrap.min.css";
import "./styles/owl.carousel.min.css";
import "./styles/owl.theme.default.min.css";
import "./styles/icomoon.css";
import "./index.scss"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

