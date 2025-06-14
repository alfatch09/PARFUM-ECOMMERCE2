import React, { useEffect, useState } from 'react';
import LayoutAdmin from '../components/LayoutAdmin';
import axios from 'axios';

const AdminDashboard = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    brand: '',
    countInStock: '',
    imageFile: null,
    image: '',
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
        await axios.put(`http://localhost:5000/api/products/${editProductId}`, productData);
        alert('Produk berhasil diperbarui!');
      } else {
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
      alert('Terjadi kesalahan.');
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
    setEditProductId(prod.id);
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
    <LayoutAdmin>
      {/* FORM TAMBAH / EDIT PRODUK */}
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">
            <i className={`fas ${editProductId ? 'fa-edit' : 'fa-plus-circle'}`}></i> {editProductId ? 'Edit Produk' : 'Tambah Produk'}
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-group">
              <label>Nama Produk</label>
              <input type="text" name="name" className="form-control" value={product.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Harga</label>
              <input type="number" name="price" className="form-control" value={product.price} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Deskripsi</label>
              <textarea name="description" className="form-control" value={product.description} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Gambar</label>
              <input type="file" accept="image/*" className="form-control" onChange={handleFileChange} />
            </div>
            <div className="form-group">
              <label>Brand</label>
              <input type="text" name="brand" className="form-control" value={product.brand} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Stok</label>
              <input type="number" name="countInStock" className="form-control" value={product.countInStock} onChange={handleChange} required />
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-success me-2">
              <i className={`fas ${editProductId ? 'fa-save' : 'fa-plus'}`}></i> {editProductId ? 'Update' : 'Tambah'} Produk
            </button>
            {editProductId && (
              <button type="button" className="btn btn-secondary" onClick={() => {
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
                <i className="fas fa-times"></i> Batal Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* TABEL PRODUK */}
      <div className="card mt-4">
        <div className="card-header bg-info text-white">
          <h3 className="card-title"><i className="fas fa-boxes"></i> Daftar Produk</h3>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
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
                <tr key={prod.id}>
                  <td>
                    <img src={`http://localhost:5000/assets/${prod.image}`} alt={prod.name} width="80" />
                  </td>
                  <td>{prod.name}</td>
                  <td>Rp {prod.price}</td>
                  <td>{prod.description}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(prod)}>
                      <i className="fas fa-edit"></i> Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(prod.id)}>
                      <i className="fas fa-trash-alt"></i> Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default AdminDashboard;
