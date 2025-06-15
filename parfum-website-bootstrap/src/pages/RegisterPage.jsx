import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // default role
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, role } = formData;

    if (!name || !email || !password || !role) {
      return setError('Semua field wajib diisi');
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        role,
      });

      alert('Register berhasil!');
    } catch (err) {
      setError(err.response?.data?.message || 'Gagal mendaftar');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nama</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" name="password" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <select name="role" className="form-select" onChange={handleChange}>
            <option value="user">User</option>
            <option value="owner">Owner</option>
          </select>
        </div>
        <button type="submit" className="btn btn-dark">Daftar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
