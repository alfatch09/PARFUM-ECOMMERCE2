import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  Container, Button, ListGroup, Image, Row, Col, Card, Modal,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
  
  const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);

  const handlePaymentClick = () => setShowPayment(true);

  const handleConfirmPayment = () => {
    clearCart(); // Kosongkan keranjang
    setShowPayment(false); // Tutup modal
    navigate('/thankyou'); // Arahkan ke halaman thank you
  };

  if (cartItems.length === 0) {
    return (
      <Container className="text-center py-5">
        <h1 className="fw-bold">Your Cart is Empty</h1>
        <Button variant="dark" onClick={() => navigate('/collection')}>
          Start Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="fw-bold mb-4">Shopping Cart</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <Image src={item.image} alt={item.name} style={{ width: '80px' }} rounded />
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-0">{item.name}</h5>
                  <small className="text-muted">{formatCurrency(item.price)} x {item.quantity}</small>
                </div>
                <div className="fw-bold me-3">{formatCurrency(item.price * item.quantity)}</div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                  <FaTrash />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className="fs-4">Order Summary</Card.Title>
              <hr />
              <div className="d-flex justify-content-between fs-5 fw-bold">
                <span>Total</span>
                <span>{formatCurrency(getCartTotal())}</span>
              </div>
              <Button variant="dark" className="w-100 mt-3" onClick={handlePaymentClick}>
                Proceed to Payment
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal Pembayaran */}
      <Modal show={showPayment} onHide={() => setShowPayment(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Silakan lakukan pembayaran ke:</p>
          <ul>
            <li><strong>Bank:</strong> BCA</li>
            <li><strong>No. Rek:</strong> 1234567890</li>
            <li><strong>Nama:</strong> PT. MAHA PARFUME</li>
          </ul>
          <p>Atau scan QRIS di bawah ini:</p>
          <img
            src="/src/assets/qris.jpg"
            alt="QRIS"
            className="img-fluid border rounded"
          />
          <p className="text-muted mt-3"><small>Setelah melakukan pembayaran, klik tombol di bawah ini.</small></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleConfirmPayment}>
            Saya Sudah Bayar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CartPage;
