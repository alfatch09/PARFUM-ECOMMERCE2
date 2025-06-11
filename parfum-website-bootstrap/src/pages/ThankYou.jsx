// src/pages/ThankYou.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="fw-bold text-success">Thank You for Your Order!</h1>
      <p className="lead">Pembayaran Anda telah kami terima. Kami akan segera mengirimkan pesanan Anda.</p>
      <Button as={Link} to="/collection" variant="dark" className="mt-3">
        Kembali Belanja
      </Button>
    </Container>
  );
};

export default Thankyou;
