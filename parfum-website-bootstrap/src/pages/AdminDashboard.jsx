import React, { useEffect, useState } from 'react';
import { Container, Tabs, Tab, Table, Image, Spinner, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingProduct, setEditingProduct] = useState(null);
  const [formProduct, setFormProduct] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    notes: '',
    image: '',
  });

  const navigate = useNavigate();

  // ✅ Proteksi akses hanya untuk owner
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.role !== 'owner') {
      navigate('/login');
      return;
    }

    fetchAllData();
  }, []);

  const PRODUCTS_API = 'http://localhost:5001/api/products';
  const USERS_API = 'http://localhost:5002/api/users';
  const CART_API = 'http://localhost:5003/api/cart';

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [prodRes, userRes, cartRes] = await Promise.all([
        axios.get(PRODUCTS_API),
        axios.get(USERS_API),
        axios.get(CART_API),
      ]);
      setProducts(prodRes.data);
      setUsers(userRes.data);
      setCarts(cartRes.data);
    } catch (error) {
      console.error('Error fetching admin data:', error);
      alert('Failed to fetch admin data');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormProduct((prev) => ({ ...prev, [name]: value }));
  };

  const submitProduct = async () => {
    try {
      if (!formProduct.name || !formProduct.brand || !formProduct.price) {
        alert('Please fill in Name, Brand, and Price');
        return;
      }

      if (editingProduct) {
        await axios.put(`${PRODUCTS_API}/${editingProduct._id}`, {
          ...formProduct,
          price: Number(formProduct.price),
        });
      } else {
        await axios.post(PRODUCTS_API, {
          ...formProduct,
          price: Number(formProduct.price),
        });
      }

      await fetchAllData();
      setEditingProduct(null);
      setFormProduct({
        name: '',
        brand: '',
        price: '',
        description: '',
        notes: '',
        image: '',
      });
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product');
    }
  };

  const startEditProduct = (prod) => {
    setEditingProduct(prod);
    setFormProduct({
      name: prod.name,
      brand: prod.brand,
      price: prod.price,
      description: prod.description,
      notes: prod.notes,
      image: prod.image,
    });
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setFormProduct({
      name: '',
      brand: '',
      price: '',
      description: '',
      notes: '',
      image: '',
    });
  };

  const deleteProduct = async (id) => {
    if (window.confirm('Are you sure to delete this product?')) {
      try {
        await axios.delete(`${PRODUCTS_API}/${id}`);
        await fetchAllData();
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" />
        <p>Loading dashboard...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Admin Dashboard</h1>
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
      </div>

      <Tabs defaultActiveKey="products" id="admin-tabs" className="mb-3">
        <Tab eventKey="products" title="Products">
          <div className="mb-4">
            <h5>{editingProduct ? 'Edit Product' : 'Add New Product'}</h5>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formProduct.name}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formProduct.brand}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formProduct.price}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formProduct.image}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formProduct.description}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
            <textarea
              name="notes"
              placeholder="Notes"
              value={formProduct.notes}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
            <button className="btn btn-primary me-2" onClick={submitProduct}>
              {editingProduct ? 'Update' : 'Add'}
            </button>
            {editingProduct && (
              <button className="btn btn-secondary" onClick={cancelEdit}>
                Cancel
              </button>
            )}
          </div>

          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Description</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod._id}>
                  <td>
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      rounded
                    />
                  </td>
                  <td>{prod.name}</td>
                  <td>{prod.brand}</td>
                  <td>Rp {prod.price.toLocaleString('id-ID')}</td>
                  <td>{prod.description}</td>
                  <td>{prod.notes}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => startEditProduct(prod)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteProduct(prod._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="users" title="Users">
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Email</th>
                <th>Username</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.email}</td>
                  <td>{user.username || '-'}</td>
                  <td>{user.role || 'user'}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="cart" title="Cart">
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>User</th>
                <th>Product</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart._id}>
                  <td>{cart.user?.email || 'Unknown'}</td>
                  <td>{cart.product?.name || 'Unknown'}</td>
                  <td>{cart.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AdminDashboard;
