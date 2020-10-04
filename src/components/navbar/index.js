import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="topicNav">
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/explore">Explore Page</a>
          </li>
          <li>
            <a href="/faq">FAQ Page</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}