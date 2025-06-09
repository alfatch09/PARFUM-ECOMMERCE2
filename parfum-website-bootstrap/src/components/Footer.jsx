// File: src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './Footer.module.css'; // Pastikan file CSS ini ada di folder yang sama

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          {/* Company Column */}
          <Col md={4} className="mb-4">
            <h5 className={styles.footerHeading}>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className={styles.footerLink}>About us</a></li>
              <li><a href="#" className={styles.footerLink}>Blog</a></li>
              <li><a href="#" className={styles.footerLink}>Contact us</a></li>
              <li><a href="#" className={styles.footerLink}>Pricing</a></li>
              <li><a href="#" className={styles.footerLink}>Testimonials</a></li>
            </ul>
          </Col>

          {/* Support Column */}
          <Col md={4} className="mb-4">
            <h5 className={styles.footerHeading}>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className={styles.footerLink}>Help center</a></li>
              <li><a href="#" className={styles.footerLink}>Terms of service</a></li>
              <li><a href="#" className={styles.footerLink}>Legal</a></li>
              <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Status</a></li>
            </ul>
          </Col>

          {/* Stay Updated Column */}
          <Col md={4} className="mb-4">
            <h5 className={styles.footerHeading}>Stay Updated</h5>
            <Form>
              <Form.Group controlId="formEmail" className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Your Email Address"
                  className={styles.emailInput}
                />
              </Form.Group>
              <Button type="submit" className={styles.subscribeButton}>
                Subscribe
              </Button>
            </Form>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialLink}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.socialLink}><i className="fab fa-twitter"></i></a>
              <a href="#" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
        </Row>

        <div className={styles.footerBottom}>
          <p className="mb-0">&copy; 2023 MAHA PARFUME. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;