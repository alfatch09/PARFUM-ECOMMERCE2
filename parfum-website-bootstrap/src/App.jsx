import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import TeamsPage from './pages/TeamsPage';
import ThankYou from './pages/Thankyou';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      
      {/* Tambahkan Footer di sini */}
      <Footer />
    </div>
  );
}

export default App;
