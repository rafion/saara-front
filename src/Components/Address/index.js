import React, { useEffect } from 'react';
import './styles.css';
import { Footer } from '../../Components/Footer';
import LeftArrow from '../../assets/icons/left-arrow.svg';

export function Address(props) {
  useEffect(() => {
    const { email, password } = props.location.state;
    console.log(email, password);
  });

  return (
    <div id="page-address">
      <form className="address-content">
        <div className="back">
          <img src={LeftArrow} alt="Voltar" />
          <span>Voltar</span>
        </div>
        <h1 className="address-title">Endereço</h1>

        <div className="address-group">
          <div className="first-section">
            <label htmlFor="street-input" className="street-label" required>
              Logradouro
            </label>
            <input type="text" name="name" id="street-input" required />
            <label htmlFor="number-input" className="number-label" required>
              Nº
            </label>
            <input type="number" name="number" id="number-input" required />
            <label htmlFor="cep-input" className="cep-label" required>
              CEP
            </label>
            <input type="text" name="name" id="cep-input" required autoFocus />
          </div>
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
        </div>
      </form>
      <Footer />
    </div>
  );
}
