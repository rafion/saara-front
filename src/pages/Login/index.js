import React from 'react';
import './styles.css';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div id="page-login">
      <form className="login-content">
        <h1 className="login-title">Fazer login</h1>
        <div className="login-group">
          <label htmlFor="email-input" className="email-label">
            Seu email
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Ex: joao@email.com"
            required
            autoFocus
            maxLength="100"
          />
          <label htmlFor="password-input" className="password-label" required>
            Senha
          </label>
          <input type="password" name="password" id="password-input" required />
        </div>
        <div className="bottom-group">
          <input type="submit" value="Entrar" className="login-btn" />
          <p>
            Novo na Saara ? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>
      </form>
      <Footer />
    </div>
  );
}
