import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import './Home.css'
const HomePage = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <div className="text-center text-white bg-dark py-5" style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/src/assets/hero-perfume.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <Container>
            <h1 className="display-4 fw-bold">Discover Your Signature Scent</h1>
            <p className="lead my-4">Unforgettable fragrances for every moment.</p>
            <Button as={Link} to="/collection" variant="light" size="lg">
              Shop Collection
            </Button>
        </Container>
      </div>

      {/* Featured Products Section */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5">Featured Products</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {featuredProducts.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;