import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import bgVideo from '../assets/vid.mp4'; // 
import './Home.css';

const HomePage = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero Section with Video Background */}
      <div className="hero-video-container position-relative text-white text-center overflow-hidden" style={{ minHeight: '60vh' }}>
        
        {/* Background Video */}
        <video
          className="position-absolute top-0 start-0 w-100 h-100"
          autoPlay
          muted
          loop
          playsInline
          style={{ objectFit: 'cover', zIndex: '-1' }}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '0' }}></div>

        {/* Hero content */}
        <Container className="position-relative d-flex flex-column justify-content-center align-items-center h-100" style={{ zIndex: '1' }}>
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
