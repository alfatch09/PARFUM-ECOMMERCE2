import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Masukkan email yang valid.');
      return;
    }

    setEmailError('');
    setShowPopup(true);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          {/* Company Column */}
          <Col md={4} className="mb-4">
            <h5 className={styles.footerHeading}>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link to="/collection" className={styles.footerLink}>Product</Link></li>
              <li><a href="/care-tips" className={styles.footerLink}>Care Tips</a></li>
            </ul>
          </Col>

          {/* Support Column */}
          <Col md={4} className="mb-4">
            <h5 className={styles.footerHeading}>Support</h5>
            <ul className="list-unstyled">
              <li><Link to="/help" className={styles.footerLink}>Help center</Link></li>
              <li><Link to="/terms" className={styles.footerLink}>Terms of service</Link></li>
              <li><Link to="/privacy" className={styles.footerLink}>Privacy police</Link></li>
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  className={styles.emailInput}
                />
                {emailError && (
                  <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '4px' }}>
                    {emailError}
                  </div>
                )}
              </Form.Group>
              <Button
                type="button"
                className={styles.subscribeButton}
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </Form>

            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/maha.parfume"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/maha_parfume"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/maha.parfume"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>

        <div className={styles.footerBottom}>
          <p className="mb-0">&copy; 2025 MAHA PARFUME</p>
        </div>
      </Container>

      {/* Modal Elegan */}
      <Modal
        show={showPopup}
        onHide={() => setShowPopup(false)}
        centered
        contentClassName={styles.customModal}
      >
        <Modal.Header closeButton className={styles.customModalHeader}>
          <Modal.Title className={styles.modalTitle}>🎉 Berhasil Berlangganan</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          Email kamu berhasil ditambahkan!<br />
          Kami akan kirim info terbaru seputar MAHA PARFUME langsung ke email kamu.
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button
            style={{
              backgroundColor: '#481a6f',
              borderColor: '#a67bb7',
              borderRadius: '30px',
              padding: '6px 24px',
              fontWeight: '500'
            }}
            onClick={() => setShowPopup(false)}
          >
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;