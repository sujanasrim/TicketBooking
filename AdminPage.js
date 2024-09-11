import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css'; 
import Navbar from './Navbar';
import Footer from './Footer';

function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'Jaspreet' && password === 'Admin') {
      navigate('/Background'); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-page">
      <Navbar />
      <div className="admin-container">
        <h2 className='j'>Admin Login</h2>
        <div className="form-group">
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label className='d'>Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label className='d'>Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPage;
