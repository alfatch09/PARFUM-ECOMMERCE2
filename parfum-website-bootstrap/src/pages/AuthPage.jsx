import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Alert, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [mode, setMode] = useState('login'); // login or signup
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      const url = mode === 'login'
        ? 'http://localhost:5000/api/users/login'
        : 'http://localhost:5000/api/users/signup';

      const payload = mode === 'login'
        ? { email, password }
        : { name, email, password };

      const response = await axios.post(url, payload);

      const data = response.data;
      localStorage.setItem('userInfo', JSON.stringify(data));
      setSuccess(`${mode === 'login' ? 'Login' : 'Sign Up'} successful!`);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
      <Card style={{ width: '26rem', borderRadius: '1rem' }} className="p-4 shadow">
        <Card.Body>
          <h2 className="text-center mb-3">{mode === 'login' ? 'Sign In' : 'Sign Up'}</h2>

          <ToggleButtonGroup type="radio" name="mode" value={mode} onChange={val => setMode(val)} className="mb-3 w-100">
            <ToggleButton id="login" value="login" variant="outline-dark">Sign In</ToggleButton>
            <ToggleButton id="signup" value="signup" variant="outline-dark">Sign Up</ToggleButton>
          </ToggleButtonGroup>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              {mode === 'login' ? 'Sign In' : 'Sign Up'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AuthPage;
