import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Anda bisa menghapus isi file ini jika tidak perlu custom CSS
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);