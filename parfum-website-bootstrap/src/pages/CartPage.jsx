import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Container, Button, ListGroup, Image, Row, Col, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart, getCartTotal } = useCart();
  
  const formatCurrency = (amount) => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);

  if (cartItems.length === 0) {
    return (
      <Container className="text-center py-5">
        <h1 className="fw-bold">Your Cart is Empty</h1>
        <Link to="/collection">Start Shopping</Link>
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
                    <hr/>
                    <div className="d-flex justify-content-between fs-5 fw-bold">
                        <span>Total</span>
                        <span>{formatCurrency(getCartTotal())}</span>
                    </div>
                    <Button as={Link} to="/payment" variant="dark" className="w-100 mt-3">
                        Proceed to Payment
                    </Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;