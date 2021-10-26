import React from 'react';
import {Header} from '../../Components/Header'
import './styles.css';
import {Footer} from '../../Components/Footer'

export function Home(){

  return (
    <div id="page-home">
      <Header />
      <main>
        <div className="home-container">
          <div className="carousel">
            <div className="item">
              <div className="image">
                <img src="https://images-americanas.b2w.io/produtos/1935655862/imagens/livro-slash-the-autobiography/1935655889_1_large.jpg" alt="Book" />
              </div>
              <div className="info">
                <span className="name">Book1</span>
                <span className="price">R$120.00</span>
                <span className="inStock">Disponível</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}