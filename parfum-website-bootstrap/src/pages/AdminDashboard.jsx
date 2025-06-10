import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    brand: '',
    countInStock: '',
    imageFile: null,
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Gagal fetch produk:', err);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.imageFile) {
      alert('Silakan pilih gambar terlebih dahulu');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', product.imageFile);

      const uploadRes = await axios.post('http://localhost:5000/api/upload', formData);
      console.log('Respons dari Upload Gambar:', uploadRes.data); // Log untuk memastikan upload berhasil

      // Pastikan ada filename dari respons upload
      if (!uploadRes.data || !uploadRes.data.filename) {
          alert('Server tidak mengembalikan nama file setelah upload. Cek log server /api/upload.');
          return;
      }

      const productData = {
        name: product.name,
        price: Number(product.price),
        description: product.description,
        brand: product.brand,
        countInStock: Number(product.countInStock),
        image: uploadRes.data.filename,
      };


      // ================== PENTING: LOG SEBELUM MENGIRIM ==================
      // Kita log data yang akan dikirim untuk memastikan formatnya benar
      console.log('DATA YANG DIKIRIM KE /api/products:', productData);
      // =================================================================

      await axios.post('http://localhost:5000/api/products', productData);

      alert('Produk berhasil ditambahkan!');
      setProduct({ name: '', price: '', description: '', imageFile: null });
      fetchProducts();

    } catch (err) {
      // ================== INI BAGIAN PALING PENTING UNTUK DEBUGGING ==================
      console.error('GAGAL SUBMIT, MENDETEKSI ERROR...');

      if (err.response) {
        // Error datang dari server (server merespons dengan status error seperti 400, 404, 500)
        console.error('PESAN ERROR DARI SERVER:', err.response.data);
        console.error('STATUS CODE:', err.response.status);
        console.error('HEADERS:', err.response.headers);
      } else if (err.request) {
        // Request dibuat tapi tidak ada respons yang diterima (misal: server down)
        console.error('Tidak ada respons dari server. Cek koneksi atau status server backend.');
        console.error('Request yang dikirim:', err.request);
      } else {
        // Error terjadi saat setup request
        console.error('Error saat setup request:', err.message);
      }
      
      // Tampilkan pesan yang lebih informatif
      const serverMessage = err.response ? JSON.stringify(err.response.data) : err.message;
      alert(`Gagal menambahkan produk. Cek konsol browser untuk detail.\n\nServer mengatakan: ${serverMessage}`);
      // =============================================================================
    }
  };

  return (
    // ... sisa JSX Anda tidak perlu diubah, biarkan sama seperti sebelumnya ...
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>

      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label className="form-label">Nama Produk</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Harga</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Deskripsi</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Gambar</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input
             type="text"
             name="brand"
             value={product.brand}
              onChange={handleChange}
             className="form-control"
              required
           />
        </div>

        <div className="mb-3">
          <label className="form-label">Stok</label>
          <input
            type="number"
            name="countInStock"
            value={product.countInStock}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>


        <button type="submit" className="btn btn-primary">Tambah Produk</button>
      </form>

      <h4>Daftar Produk</h4>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Deskripsi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod._id}>
              <td>
                <img
                  src={`http://localhost:5000/assets/${prod.image}`}
                  alt={prod.name}
                  width="80"
                />
              </td>
              <td>{prod.name}</td>
              <td>Rp {prod.price}</td>
              <td>{prod.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;