import React from 'react';
import { Container } from 'react-bootstrap';

const AboutPage = () => (
  <div
    style={{
      background: 'linear-gradient(to bottom, #f0f0f0, #d6d8da, #babec2)',
      minHeight: '100vh',
      paddingTop: '60px',
      paddingBottom: '60px',
    }}
  >
    <Container className="py-5 text-center" style={{ maxWidth: '900px' }}>
      {/* Judul Utama */}
      <h1 className="fw-bold display-5 mb-2">MAHA PARFUME</h1>
      <h2 className="fw-normal text-uppercase mb-4" style={{ fontSize: '1.1rem', letterSpacing: '1px', color: '#666' }}>
        The Philosophy of Maha Parfume
      </h2>

      {/* Bagian Filosofi */}
      <div className="mb-5 pb-4 border-bottom" style={{ borderColor: '#eee' }}>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: '1rem', lineHeight: '2.1', color: '#444' }}>
          <p>
            At Maha Parfume, we believe that fragrance is more than just a scent—it is an invisible signature,
            a story whispered through the air, a memory captured in a single breath. Founded in March 2025,
            Maha Parfume was born from a passion for crafting scents that transcend time.
          </p>
          <p>
            Each fragrance is a delicate balance of artistry and nature, blending the finest ingredients
            with meticulous craftsmanship to create perfumes that embody elegance, depth, and individuality.
          </p>
          <p>
            Our creations are designed to accompany you on your journey, leaving a lasting impression that
            lingers beyond the moment. Whether bold and captivating or soft and intimate, every Maha Parfume scent
            is a reflection of your essence—an extension of who you are.
          </p>
          <p className="fst-italic mt-4 text-secondary" style={{ fontSize: '1.2rem' }}>
            “Maha Parfume: Where Scent Becomes a Story.”
          </p>
        </div>
      </div>

      {/* Bagian Visi */}
      <div className="mb-5 pb-4 border-bottom" style={{ borderColor: '#eee' }}>
        <h2 className="h4 fw-bold mb-3 text-uppercase">Visi</h2>
        <p className="lead text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
          To become an iconic and prestigious perfume brand, offering scents that not only captivate but also embody individuality and emotions.
        </p>
      </div>

      {/* Bagian Misi */}
      <div>
        <h2 className="h4 fw-bold mb-3 text-uppercase">Misi</h2>
        <ul className="list-unstyled" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left', fontSize: '1.05rem' }}>
          <li className="mb-3 ps-4 position-relative">
            <span className="position-absolute" style={{ left: 0, color: '#28a745' }}>✓</span>
            Crafting high-quality perfumes using premium, long-lasting, and safe ingredients.
          </li>
          <li className="mb-3 ps-4 position-relative">
            <span className="position-absolute" style={{ left: 0, color: '#28a745' }}>✓</span>
            Delivering a unique and meaningful fragrance experience for every customer.
          </li>
          <li className="mb-3 ps-4 position-relative">
            <span className="position-absolute" style={{ left: 0, color: '#28a745' }}>✓</span>
            Innovating in the world of perfumery through technology and boundless creativity.
          </li>
          <li className="mb-3 ps-4 position-relative">
            <span className="position-absolute" style={{ left: 0, color: '#28a745' }}>✓</span>
            Promoting sustainability and environmental balance by using eco-friendly materials and ethical production processes.
          </li>
          <li className="mb-3 ps-4 position-relative">
            <span className="position-absolute" style={{ left: 0, color: '#28a745' }}>✓</span>
            Building a community of fragrance enthusiasts who understand that scent is a personal identity and a form of self-expression.
          </li>
        </ul>
      </div>
    </Container>
  </div>
);

export default AboutPage;