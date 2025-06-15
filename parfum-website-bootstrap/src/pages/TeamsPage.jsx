import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './TeamsPage.css';

import team1 from '../assets/aal.png'; 
import team2 from '../assets/HAQQI.jpg'; 
import team3 from '../assets/fanny.jpg'; 
import team4 from '../assets/maul.jpg'; 

const teamMembers = [
  {
    name: 'Muhammad Alfatch',
    role: '23.11.5460',
    bio: 'Backend Developer',
    image: team1,
  },
  {
    name: 'Hibatulhaqqi Q.R',
    role: '23.11.5479',
    bio: 'Backend Developer',
    image: team2,
  },
  {
    name: 'Agustina Septofanny',
    role: '23.11.4471',
    bio: 'Frontend Developer',
    image: team3,
  },
  {
    name: 'Maulida Luthfi H', 
    role: '23.11.5485',
    bio: 'Frontend Developer',
    image: team4,
  },
];

const TeamsPage = () => (
  <Container className="py-5">
    <h2 className="text-center mb-5 fw-bold">Our Team</h2>
    <Row className="g-4">
      {teamMembers.map((member, index) => (
        <Col key={index} xs={12} sm={6} md={3} className="d-flex">
          <Card className="text-center shadow flex-fill team-card">
            <Card.Img variant="top" src={member.image} className="team-img" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{member.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
              <Card.Text className="mt-auto">{member.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default TeamsPage;