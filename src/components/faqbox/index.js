import React from 'react';
import styled from 'styled-components'
;
const Box = styled.div`
    background-color: white;
    box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    text-align: left;
    width: 35rem;
    margin: 2rem;
    padding: 2rem;
`;

export const FaqBox = ({ title, text, buttonText, buttonLink }) => {
  return (
    <Box>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={buttonLink}>
            <button>
                {buttonText}
            </button>
        </a>
    </Box>
  )
}
