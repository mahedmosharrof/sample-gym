import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './output.css'; // ✨ This pulls in your compiled Tailwind styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
