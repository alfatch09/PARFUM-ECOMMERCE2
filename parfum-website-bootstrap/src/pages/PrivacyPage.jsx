import React from 'react';

const PrivacyPage = () => {
  const styles = {
    wrapper: {
      background: '#fcfcfc',
      padding: '80px 24px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '600',
      marginBottom: '40px',
      borderLeft: '6px solid #999',
      paddingLeft: '16px',
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.75',
      marginBottom: '24px',
      textAlign: 'justify',
    },
    section: {
      marginBottom: '36px',
    },
    bullet: {
      fontSize: '1rem',
      marginBottom: '16px',
      lineHeight: '1.7',
      textAlign: 'justify',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Privacy Policy</h2>

        <p style={styles.paragraph}>
          Di <strong>MAHA PARFUME</strong>, kami berkomitmen untuk menjaga dan melindungi privasi
          Anda. Berikut ini adalah kebijakan kami dalam mengelola data pribadi pengguna:
        </p>

        <div style={styles.section}>
          <ul style={{ paddingLeft: '1rem' }}>
            <li style={styles.bullet}>
              Kami mengumpulkan informasi pribadi seperti nama, alamat email, dan nomor telepon
              semata-mata untuk keperluan pengiriman produk, layanan pelanggan, dan komunikasi
              promosi.
            </li>
            <li style={styles.bullet}>
              Data pribadi Anda tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda,
              kecuali jika diwajibkan oleh hukum.
            </li>
            <li style={styles.bullet}>
              Kami menggunakan cookie untuk meningkatkan kinerja situs serta memberikan pengalaman
              yang lebih personal bagi setiap pengguna.
            </li>
            <li style={styles.bullet}>
              Anda berhak untuk meminta akses, koreksi, atau penghapusan data pribadi Anda kapan
              saja dengan menghubungi layanan pelanggan kami.
            </li>
          </ul>
        </div>

        <p style={styles.paragraph}>
          Dengan melanjutkan penggunaan situs ini, Anda dianggap telah membaca, memahami, dan
          menyetujui kebijakan privasi ini. Kebijakan ini dapat diperbarui sewaktu-waktu untuk
          menyesuaikan dengan peraturan dan kebutuhan layanan.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;