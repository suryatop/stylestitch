import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ShopContextProvider from './Context/ShopContext';

const rootElement = document.getElementById('root'); // Correct element reference
const root = ReactDOM.createRoot(rootElement); // Correct usage of ReactDOM.createRoot
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
