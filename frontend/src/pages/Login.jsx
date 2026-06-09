import React, { useState } from 'react';
import '../styles/Login.css';
import heroImg from '../assets/logo.png';

const Login = ({ onLoginSuccess }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
        const response = await fetch('http://localhost:9090/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario, password })
        });

        if (response.ok) {
          const data = await response.json();
          alert("¡" + data.mensaje + "!");
          if (onLoginSuccess) onLoginSuccess();
        } else {
          setError('Credenciales inválidas. Intenta nuevamente.');
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        setError('No se pudo conectar con el servidor.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">

        <div className="logo-section">
          <img src={heroImg} alt="Sistema" className="logo-image" />
        </div>

        <div className="form-section">

          <h2 className="login-title">USER LOGIN</h2>

          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}

            <div className="input-group">
              <div className="icon-wrapper">
                <span>👤</span>
              </div>

              <input
                type="text"
                placeholder="Username"
                className="login-input"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="icon-wrapper">
                <span>🔒</span>
              </div>
            </div>

            <button type="submit" className="login-button">
              LOGIN
            </button>
            
          </form>

        </div>

      </div>
    </div>
  );
};

export default Login;