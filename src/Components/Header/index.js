import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.png'
import Cart from '../../assets/shopping-cart1.svg'
import User from '../../assets/user1.svg'
import Search from '../../assets/search1.svg'


export function Header(){
  return(
    <div className="container">
      <header className="header-nav">
        <img src={Logo} alt="Logo" />
        <div className="input-group">
          <div className="search-group">
            <input type="text" className="input-search"/>
            <button>
              <img src={Search} alt="Search" />
            </button>
          </div>
          <div className="check-list">
            <div className="check-group">
              <input type="checkbox" id="All" />
              <p>Todos</p>
            </div>
            <div className="check-group">
              <input type="checkbox" id="Book" />
              <p>Livro</p>
            </div>
            <div className="check-group">  
              <input type="checkbox" id="Author" />
              <p>Autor</p>
            </div>
            <div className="check-group">  
              <input type="checkbox" id="Publisher" />
              <p>Editora</p>
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