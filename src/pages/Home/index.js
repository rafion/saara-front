import React, { useEffect, useState, useRef } from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';

import LeftArrow from '../../assets/icons/left-arrow.svg';
import RightArrow from '../../assets/icons/left-arrow.svg';

import api from '../../api';

import './styles.css';

export function Home() {
  const [books, setBooks] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    api.get('livros').then((res) => {
      const books = res.data;
      console.log(books);
      setBooks(books);
    });
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!books || !books.length) return null;

  return (
    <div id="page-home">
      <Header />
      <main>
        <div className="news-container">
          <h1 className="main-title">Novidades</h1>
          <div className="carousel" ref={carousel}>
            {books.map((item) => {
              const { id, titulo, precoUnitario, autor, url_img } = item;
              console.log('item', item);
              return (
                <div className="item" key={id}>
                  <div className="image">
                    <img
                      src={url_img}
                      alt="Book"
                    />
                  </div>
                  <div className="info">
                    <span className="name">{titulo}</span>
                    <span className="price">R${precoUnitario}</span>
                    <span className="sub-name">Autor: {autor}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="buttons">
            <button onClick={handleLeftClick} className="carousel-btn">
              <img src={LeftArrow} alt="Scroll Left" />
            </button>
            <button onClick={handleRightClick} className="carousel-btn">
              <img src={RightArrow} alt="Scroll Right" />
            </button>
          </div>
        </div>
        <div className="separator"></div>
      </main>
      <Footer />
    </div>
  );
}
