import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

const CollectionPage = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center fw-bold">Our Collection</h1>
      <p className="text-center text-muted mb-5">Explore our curated selection of fine fragrances.</p>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CollectionPage;