import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://your-api-url.com/auth/signin', {
        email,
        password,
      });

      // Assuming the API returns a token upon successful authentication
      const { token } = response.data;
      localStorage.setItem('token', token);

      // Redirect to the home page or dashboard after successful sign-in
      history.push('/Home');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Sign In</h3>
              {error && <div className="alert alert-danger" role="alert">{error}</div>}
              <form onSubmit={handleSignIn}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
              </form>
              <div className="text-center mt-3">
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </div>
              <div className="text-center mt-2">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
