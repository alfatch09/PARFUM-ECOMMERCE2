import React from 'react';

const TermsPage = () => {
  const styles = {
    wrapper: {
      background: '#fdfdfd',
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
    section: {
      marginBottom: '36px',
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '12px',
      color: '#444',
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.75',
    },
    link: {
      color: '#555',
      textDecoration: 'underline',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Terms of Service</h2>

        <p style={{ ...styles.paragraph, marginBottom: '30px' }}>
          Dengan mengakses dan menggunakan situs <strong>MAHA PARFUME</strong>, Anda setuju untuk
          terikat dengan syarat dan ketentuan berikut ini. Mohon baca dengan saksama.
        </p>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Penggunaan Layanan</h4>
          <p style={styles.paragraph}>
            Situs ini hanya dapat digunakan untuk tujuan yang sah dan tidak boleh disalahgunakan
            untuk kegiatan yang melanggar hukum.
          </p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Akun Pengguna</h4>
          <p style={styles.paragraph}>
            Anda bertanggung jawab atas keamanan informasi akun Anda. Kami tidak bertanggung jawab
            atas kerugian akibat penggunaan yang tidak sah.
          </p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Transaksi</h4>
          <p style={styles.paragraph}>
            Semua pembelian produk tunduk pada ketersediaan stok dan proses konfirmasi pembayaran.
          </p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Konten dan Hak Cipta</h4>
          <p style={styles.paragraph}>
            Seluruh konten dalam situs ini dilindungi oleh hak cipta. Dilarang menggandakan,
            mendistribusikan, atau memodifikasi tanpa izin tertulis dari MAHA PARFUME.
          </p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Perubahan Ketentuan</h4>
          <p style={styles.paragraph}>
            MAHA PARFUME berhak untuk mengubah syarat & ketentuan ini kapan saja tanpa
            pemberitahuan sebelumnya. Perubahan akan ditampilkan di halaman ini.
          </p>
        </div>

        <p style={{ ...styles.paragraph, marginTop: '40px' }}>
          Dengan menggunakan situs kami, Anda dianggap telah membaca dan menyetujui seluruh syarat
          dan ketentuan ini. Untuk informasi mengenai bagaimana kami mengelola data Anda, silakan
          baca juga{' '}
          <a href="/privacy" style={styles.link}>
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;