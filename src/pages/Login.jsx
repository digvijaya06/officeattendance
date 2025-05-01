import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter email and password');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Invalid email format');
      return;
    }

    if (email === "admin@example.com" && password === "admin123") {
      setUser({ name: 'Admin', email: 'admin@example.com' });
      toast.success('Admin logged in successfully');
      navigate('/admin');
    } else if (email === "user@example.com" && password === 'user123') {
      setUser({ name: 'User', email: 'user@example.com' });
      toast.success('User logged in successfully');
      navigate('/user');
    } else if (email === "abc@example.com" && password === 'abc123') {
      setUser({ name: 'ABC', email: 'abc@example.com' });
      toast.success("ABC logged in successfully");
      navigate('/abc');
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <Container fluid className="login-page d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} sm={10} md={6} lg={4} className="mx-auto">
          <div className="login-card glass-card p-4 shadow">
            <h3 className="text-center mb-4">🔐 Welcome Back!</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaLock /></InputGroup.Text>
                  <Form.Control
                    type={showPass ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text onClick={() => setShowPass(!showPass)} style={{ cursor: 'pointer' }}>
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100 fw-bold">
                 Login
                 
              </Button>
              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none small">Forgot password?</a><br />
                <a href="#" className="text-decoration-none small">New user? Sign up</a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
