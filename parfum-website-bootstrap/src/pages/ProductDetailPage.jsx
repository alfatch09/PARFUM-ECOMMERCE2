import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { products } from '../data.js';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(product?.price || 0);

  if (!product) {
    return (
      <Container className="text-center py-5">
        <h1 className="fw-bold">Product not found</h1>
        <Link to="/collection">Back to Collection</Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid rounded />
        </Col>
        <Col md={6}>
          <h1 className="display-5 fw-bold">{product.name}</h1>
          <p className="fs-5 text-muted">{product.brand}</p>
          <p className="display-6 fw-semibold my-3">{formattedPrice}</p>
          <p className="lead">{product.description}</p>
          <div className="my-4">
            <h5 className="fw-semibold">Scent Notes:</h5>
            <p>{product.notes}</p>
          </div>
          <Button variant="dark" size="lg" className="w-100" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;