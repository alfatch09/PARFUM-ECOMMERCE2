import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaSun, FaTint, FaHeartbeat, FaBan, FaClock,
  FaLock, FaSuitcase, FaPlane
} from 'react-icons/fa';

const usageTips = [
  {
    icon: <FaSun />,
    title: 'Simpan di tempat sejuk dan gelap',
    description: 'Hindari sinar matahari langsung karena bisa merusak aroma parfum.',
  },
  {
    icon: <FaTint />,
    title: 'Hindari tempat lembap',
    description: 'Jangan simpan di kamar mandi. Kelembapan tinggi mempengaruhi kualitas parfum.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Gunakan di titik nadi',
    description: 'Leher, pergelangan tangan, dan belakang telinga adalah titik optimal.',
  },
  {
    icon: <FaBan />,
    title: 'Jangan digosok',
    description: 'Menggosok setelah disemprot bisa merusak molekul aroma.',
  },
  {
    icon: <FaClock />,
    title: 'Gunakan setelah mandi',
    description: 'Kulit yang bersih dan lembap membuat aroma menempel lebih lama.',
  },
];

const bottleTips = [
  {
    icon: <FaLock />,
    title: 'Tutup rapat setelah digunakan',
    description: 'Mencegah oksidasi dan menjaga keaslian aroma.',
  },
  {
    icon: <FaSuitcase />,
    title: 'Hindari tempat panas seperti bagasi',
    description: 'Suhu tinggi bisa merusak komposisi parfum.',
  },
  {
    icon: <FaPlane />,
    title: 'Jangan simpan di bagasi pesawat',
    description: 'Perubahan tekanan bisa menyebabkan kebocoran atau pecah.',
  },
];

const CareTipsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div style={{ backgroundColor: '#f9f9f6', padding: '80px 20px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', color: '#2c2c2c' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '50px', textAlign: 'center', position: 'relative' }}>
          Tips Merawat Parfum
          <span style={{ display: 'block', width: '90px', height: '2px', backgroundColor: '#aaa', margin: '14px auto 0' }}></span>
        </h2>

        {/* Bagian 1 */}
        <section data-aos="fade-up" style={{ marginBottom: '70px' }}>
          <h4 style={{ fontWeight: '600', marginBottom: '28px' }}>Tips Agar Aroma Tahan Lama</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {usageTips.map((tip, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ fontSize: '1.2rem', color: '#666', flexShrink: 0, marginTop: '4px' }}>
                  {tip.icon}
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>{tip.title}</h5>
                  <p style={{ margin: '6px 0 0', textAlign: 'justify', lineHeight: 1.6, color: '#444' }}>
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bagian 2 */}
        <section data-aos="fade-up" style={{ marginBottom: '70px' }}>
          <h4 style={{ fontWeight: '600', marginBottom: '28px' }}>Tips Merawat Botol Parfum</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {bottleTips.map((tip, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ fontSize: '1.2rem', color: '#666', flexShrink: 0, marginTop: '4px' }}>
                  {tip.icon}
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>{tip.title}</h5>
                  <p style={{ margin: '6px 0 0', textAlign: 'justify', lineHeight: 1.6, color: '#444' }}>
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareTipsPage;