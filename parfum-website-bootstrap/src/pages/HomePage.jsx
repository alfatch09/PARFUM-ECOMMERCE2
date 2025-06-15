import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import bgVideo from '../assets/vid.mp4';
import './Home.css';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeaturedProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      // Ambil 3 produk pertama sebagai featured
      setFeaturedProducts(res.data.slice(0, 3));
    } catch (error) {
      console.error('Error fetching featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <div className="hero-video-container position-relative text-white text-center overflow-hidden" style={{ height: '60vh' }}>
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
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '0' }}></div>
        <Container fluid className="d-flex justify-content-center align-items-center text-center h-100" style={{ zIndex: 1 }}>
          <div>
            <h1 className="hero-main-title">Unveil the Scent of You</h1>
            <p className="lead mt-3 mb-1">A scent that tells your story</p>
            <div className="hero-divider my-1">―</div>
            <p className="mb-4">only at MahaParfume</p>
            <Button
              as={Link}
              to="/collection"
              variant="light"
              size="lg"
              className="shop-now-btn"
            >
              Shop Now
            </Button>
          </div>
        </Container>
      </div>

      {/* Featured Products Section */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5">Featured Products</h2>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
            <p>Loading featured products...</p>
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {featuredProducts.map(product => (
              <Col key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomePage;
