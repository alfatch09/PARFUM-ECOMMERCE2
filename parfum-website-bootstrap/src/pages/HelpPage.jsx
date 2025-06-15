import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa';

const HelpCenter = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const faqList = [
    {
      question: 'Bagaimana cara memesan parfum?',
      answer: 'Pilih produk, tambahkan ke keranjang, lalu klik checkout dan selesaikan pembayaran.',
    },
    {
      question: 'Metode pembayaran yang tersedia?',
      answer: 'Kami menerima pembayaran melalui transfer bank, e-wallet, dan kartu kredit.',
    },
    {
      question: 'Apakah saya bisa melacak pesanan saya?',
      answer: 'Ya, setelah pesanan dikirim, Anda akan menerima nomor resi untuk pelacakan.',
    },
    {
      question: 'Berapa lama pengiriman berlangsung?',
      answer: 'Pengiriman biasanya memakan waktu 2–5 hari kerja tergantung lokasi Anda.',
    },
    {
      question: 'Apakah parfum yang dijual original?',
      answer: 'Semua produk kami 100% original dan bergaransi keaslian.',
    },
    {
      question: 'Bisakah saya membatalkan pesanan?',
      answer: 'Pesanan bisa dibatalkan sebelum dikirim. Hubungi kami secepatnya.',
    },
    {
      question: 'Ada diskon untuk pembelian grosir?',
      answer: 'Ya, hubungi kami untuk informasi lebih lanjut tentang pembelian grosir.',
    },
    {
      question: 'Apakah tersedia pengemasan sebagai hadiah?',
      answer: 'Tersedia. Silakan pilih opsi gift wrap saat checkout.',
    },
    {
      question: 'Apakah MAHA PARFUME memiliki toko fisik?',
      answer: 'Saat ini kami hanya melayani penjualan online.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f7f7f7', paddingTop: '50px', paddingBottom: '50px' }}>
      <Container>
        <h2 className="text-center mb-5">Help Center</h2>

        {faqList.map((faq, index) => {
          const isActive = activeKey === index.toString();
          return (
            <div key={index} style={{ marginBottom: '12px' }}>
              <div
                onClick={() => toggleAccordion(index.toString())}
                style={{
                  backgroundColor: isActive ? '#e0e0e0' : '#fdfdfd', // ← ini kuncinya
                  padding: '16px',
                  cursor: 'pointer',
                  fontWeight: 'regular',
                  borderRadius: isActive ? '8px 8px 0 0' : '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'background-color 0.3s ease',
                  color: '#222',
                }}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </div>
              <div
                style={{
                  maxHeight: isActive ? '300px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, padding 0.3s ease',
                  backgroundColor: '#ffffff',
                  padding: isActive ? '16px' : '0 16px',
                  borderRadius: '0 0 8px 8px',
                  color: '#444',
                }}
              >
                {isActive && <div>{faq.answer}</div>}
              </div>
            </div>
          );
        })}

        <Card
          className="mt-5 text-center"
          style={{
            border: 'none',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            borderRadius: '16px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Card.Body>
            <h5 className="mb-3">Masih ada pertanyaan?</h5>
            <p>Hubungi kami langsung via WhatsApp untuk bantuan lebih cepat.</p>
            <a
              href="https://wa.me/6281910908832?text=Halo%20MAHA%20PARFUME%2C%20saya%20butuh%20bantuan%20woe%20tentang%20produk%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success px-4 py-2"
            >
              <FaWhatsapp className="me-2" />
              Hubungi via WhatsApp
            </a>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default HelpCenter;