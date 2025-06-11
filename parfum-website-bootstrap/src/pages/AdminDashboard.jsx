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
  const [editProductId, setEditProductId] = useState(null);

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

    try {
      let filename = product.image;

      // Jika file gambar baru diunggah
      if (product.imageFile) {
        const formData = new FormData();
        formData.append('image', product.imageFile);
        const uploadRes = await axios.post('http://localhost:5000/api/upload', formData);
        filename = uploadRes.data.filename;
      }

      const productData = {
        name: product.name,
        price: Number(product.price),
        description: product.description,
        brand: product.brand,
        countInStock: Number(product.countInStock),
        image: filename,
      };

      if (editProductId) {
        // Update produk
        await axios.put(`http://localhost:5000/api/products/${editProductId}`, productData);
        alert('Produk berhasil diperbarui!');
      } else {
        // Tambah produk
        await axios.post('http://localhost:5000/api/products', productData);
        alert('Produk berhasil ditambahkan!');
      }

      setProduct({
        name: '',
        price: '',
        description: '',
        brand: '',
        countInStock: '',
        imageFile: null,
        image: '',
      });
      setEditProductId(null);
      fetchProducts();
    } catch (err) {
      console.error('Error:', err);
      alert('Terjadi kesalahan. Lihat konsol.');
    }
  };

  const handleEdit = (prod) => {
    setProduct({
      name: prod.name,
      price: prod.price,
      description: prod.description,
      brand: prod.brand,
      countInStock: prod.countInStock,
      imageFile: null,
      image: prod.image,
    });
    setEditProductId(prod._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        alert('Produk berhasil dihapus!');
        fetchProducts();
      } catch (err) {
        console.error('Gagal hapus produk:', err);
        alert('Gagal menghapus produk.');
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>

      <form onSubmit={handleSubmit} className="mb-5">
        {/* Form fields */}
        <div className="mb-3">
          <label className="form-label">Nama Produk</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Harga</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Deskripsi</label>
          <textarea name="description" value={product.description} onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Gambar</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input type="text" name="brand" value={product.brand} onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Stok</label>
          <input type="number" name="countInStock" value={product.countInStock} onChange={handleChange} className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary">
          {editProductId ? 'Update Produk' : 'Tambah Produk'}
        </button>
        {editProductId && (
          <button type="button" className="btn btn-secondary ms-2" onClick={() => {
            setEditProductId(null);
            setProduct({
              name: '',
              price: '',
              description: '',
              brand: '',
              countInStock: '',
              imageFile: null,
              image: '',
            });
          }}>
            Batal Edit
          </button>
        )}
      </form>

      <h4>Daftar Produk</h4>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod._id}>
              <td>
                <img src={`http://localhost:5000/assets/${prod.image}`} alt={prod.name} width="80" />
              </td>
              <td>{prod.name}</td>
              <td>Rp {prod.price}</td>
              <td>{prod.description}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(prod)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(prod._id)}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
