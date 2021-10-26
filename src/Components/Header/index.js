import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.png'
import Cart from '../../assets/shopping-cart1.svg'
import User from '../../assets/user1.svg'
import Search from '../../assets/search1.svg'
import { Link } from 'react-router-dom';

export function Header(){
  return(
    <div className="container">
      <header className="header-nav">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="input-group">
          <div className="search-group">
            <input type="text" className="input-search"/>
            <button>
              <img src={Search} alt="Search" />
            </button>
          </div>
          <div className="check-list">
            <div className="check-group">
              <input type="checkbox" id="all" />
              <label htmlFor="all">Todos</label>
            </div>
            <div className="check-group">
              <input type="checkbox" id="book_id" />
              <label htmlFor="book_id">Livro</label>
            </div>
            <div className="check-group">  
              <input type="checkbox" id="author_id" />
              <label htmlFor="author_id">Autor</label>
            </div>
            <div className="check-group">  
              <input type="checkbox" id="publisher_id" />
              <label htmlFor="publisher_id">Editora</label>
            </div>
          </div>
        </div>
        <div className="register-login">
          <img src={User} alt="User" />
          <p>Entre ou cadastre-se</p>
        </div>
        <img src={Cart} alt="Shopping cart" />
      </header>
    </div>
  );
}