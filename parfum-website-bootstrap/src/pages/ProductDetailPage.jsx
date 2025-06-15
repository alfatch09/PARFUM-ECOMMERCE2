import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Spinner, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setError('');
      } catch (err) {
        console.error('Failed to fetch product:', err);
        setError('Failed to load product. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} added to cart!`);
    }
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" />
        <p>Loading...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <Alert variant="danger">{error}</Alert>
        <Link to="/collection">← Back to Collection</Link>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="text-center py-5">
        <h1 className="fw-bold">Product not found</h1>
        <Link to="/collection">← Back to Collection</Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src={product.image?.startsWith('http') ? product.image : `http://localhost:5000/assets/${product.image}`}
            alt={product.name}
            fluid
            rounded
            style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
          />
        </Col>
        <Col md={6}>
          <Link to="/collection" className="text-decoration-none text-muted d-block mb-3">
            ← Back to Collection
          </Link>
          <h1 className="display-5 fw-bold">{product.name}</h1>
          <p className="fs-5 text-muted">{product.brand}</p>
          <p className="display-6 fw-semibold my-3">{formatCurrency(product.price)}</p>
          <p className="lead">{product.description}</p>
          <div className="my-4">
            <h5 className="fw-semibold">Scent Notes:</h5>
            <p>{product.notes || '-'}</p>
          </div>
          {product.countInStock > 0 ? (
            <Button variant="dark" size="lg" className="w-100" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          ) : (
            <Button variant="secondary" size="lg" className="w-100" disabled>
              Out of Stock
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;