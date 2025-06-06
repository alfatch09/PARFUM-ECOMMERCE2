import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} AURA Perfumes. All Rights Reserved.</p>
        <div>
          <a href="#" className="text-white me-3">Facebook</a>
          <a href="#" className="text-white me-3">Instagram</a>
          <a href="#" className="text-white">Twitter</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
