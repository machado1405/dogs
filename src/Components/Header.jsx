import React from 'react';
import styles from '../css/Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
}

export default Header;
