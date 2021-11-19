import React from 'react';
import './styles.css';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';

export function Register() {
  return (
    <div id="page-register">
      <form className="register-content">
        <h1 className="register-title">Criar conta</h1>
        <div className="register-group">
          <label htmlFor="name-input" className="name-label" required>
            Seu nome
          </label>
          <input type="text" name="name" id="name-input" required autoFocus />
          <label htmlFor="email-input" className="email-label">
            Endereço de email
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Ex: joao@email.com"
            required
            maxLength="100"
          />
          <label htmlFor="password-input" className="password-label" required>
            Senha
          </label>
          <input type="password" name="password" id="password-input" required />
          <label
            htmlFor="password-confirm-input"
            className="password-repeat-label"
            required
          >
            Digite novamente a senha
          </label>
          <input
            type="password"
            name="password"
            id="password-confirm-input"
            required
          />
        </div>
        <div className="bottom-group">
          <input type="submit" value="Cadastrar" className="register-btn" />
          <p>
            Já possui conta ? <Link to="/login">Fazer login</Link>
          </p>
        </div>
      </form>
      <Footer />
    </div>
  );
}
