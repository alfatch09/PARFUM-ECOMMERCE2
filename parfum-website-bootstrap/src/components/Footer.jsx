// File: src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './Footer.module.css'; 
console.log("✅ Styles Loaded: ", styles);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          {/* Company Column */}
          <Col md={4} className="mb-4">
            <h5 className={styles.footerHeading}>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className={styles.footerLink}>PANTEK</a></li>
              <li><a href="#" className={styles.footerLink}>Blog</a></li>
              <li><a href="#" className={styles.footerLink}>Pricing</a></li>
            </ul>
          </Col>

          {/* Support Column */}
          <Col md={4} className="mb-4">
            <h5 className={styles.footerHeading}>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className={styles.footerLink}>Help center</a></li>
              <li><a href="#" className={styles.footerLink}>Terms of service</a></li>
              <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
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
              {/* 2. Ganti tag <i> dengan komponen FontAwesomeIcon */}
              <a href="#" className={styles.socialLink}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className={styles.socialLink}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className={styles.socialLink}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
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