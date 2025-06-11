import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const teamMembers = [
  {
    name: 'Fanny',
    role: 'Founder & CEO',
    bio: 'Fanny is the visionary behind the fragrance brand.',
    image: 'src/assets/fanny.jpg',
  },
  {
    name: 'John Doe',
    role: 'Marketing Lead',
    bio: 'John leads all our fragrance campaigns and social media.',
    image: 'src/assets/aal.png',
  },
  {
    name: 'Jane Smith',
    role: 'Product Designer',
    bio: 'Jane ensures every scent is crafted perfectly.',
    image: 'src/assets/maul.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Product Designer',
    bio: 'Jane ensures every scent is crafted perfectly.',
    image: 'src/assets/HAQQI.jpg',
  },
];

const TeamsPage = () => (
  <Container className="py-5">
    <h2 className="text-center mb-5 fw-bold">Our Team</h2>
    <Row className="g-4">
      {teamMembers.map((member, index) => (
        <Col key={index} md={4}>
          <Card className="text-center shadow h-100">
            <Card.Img variant="top" src={member.image} />
            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
              <Card.Text>{member.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default TeamsPage;
