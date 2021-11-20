import React, { useState } from 'react';
import './styles.css';
import { Footer } from '../../Components/Footer';
import { Link, useHistory } from 'react-router-dom';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = verifyPassword(password);
    console.log(isValid);
    if (isValid) {
      console.log('chegou');
      history.push('/address', { email, password });
    }
  }

  function verifyPassword(passwd) {
    return passwd.length >= 5;
  }

  return (
    <div id="page-register">
      <form className="register-content" onSubmit={handleSubmit}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password-input" className="password-label" required>
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="bottom-group">
          <button type="submit" className="register-btn">
            Continuar
          </button>
          <p>
            Já possui conta ? <Link to="/login">Fazer login</Link>
          </p>
        </div>
      </form>
      <Footer />
    </div>
  );
}
