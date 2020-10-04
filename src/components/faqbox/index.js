import React from 'react';
import './faqbox.css';

export const FaqBox = ({ title, text, buttonText, buttonLink }) => {
  return (
    <div className="faqbox">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={buttonLink}>
            <button>
                {buttonText}
            </button>
        </a>
    </div>
  )
}
