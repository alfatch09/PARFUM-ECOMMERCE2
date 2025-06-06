import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <Card className="h-100 shadow-sm border-0">
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.image} style={{ height: '250px', objectFit: 'cover' }} />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-semibold">{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.brand}</Card.Subtitle>
        <Card.Text className="fw-bold fs-5 mt-2">{formattedPrice}</Card.Text>
        <div className="mt-auto d-flex justify-content-between">
          <Button as={Link} to={`/product/${product.id}`} variant="outline-dark" size="sm">
            View Details
          </Button>
          <Button variant="dark" size="sm" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;