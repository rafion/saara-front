import React, { useEffect, useState, useRef } from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';

import LeftArrow from '../../assets/icons/left-arrow.svg';
import RightArrow from '../../assets/icons/left-arrow.svg';

import './styles.css';

export function Home(){
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/books.json')
      .then((response) => response.json())
      .then(setData);
  }, [])

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;

  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  if(!data || !data.length ) return null;

  return (
    <div id="page-home">
      <Header />
      <main>
        <div className="home-container">
          <div className="carousel" ref={carousel}>
            {data.map((item) => {
              const {id, name, price, image, inStock} = item;
              return (
                <div className="item" key={id}>
                  <div className="image">
                    <img src={image} alt="Book" />
                  </div>
                  <div className="info">
                    <span className="name">{name}</span>
                    <span className="price">R${price}</span>
                    <span className={`inStock ${inStock === 'Indisponível' ? 'unavailable' : ''}`}>{inStock}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="buttons">
            <button onClick={handleLeftClick}>
              <img src={LeftArrow} alt="Scroll Left" />
            </button>
            <button onClick={handleRightClick}>
              <img src={RightArrow} alt="Scroll Right" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}