import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

const Bar = styled.input`
  width: 18rem;
  padding-left: 3rem;
  border-radius: 7px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
  height: 39px;
  border: 0px;
  background-color: ${(props) => props.theme.colors.fullWhite};
  color: ${(props) => props.theme.colors.gray};
  font-weight: 500;
  font-size:18px;
  line-height:21px;

  ::placeholder {
      color: inherit;
  }

  @media only screen and (max-width : 768px) {
    width: 90%;
  }
`;

const Icon = styled.i`
  position: absolute;
  margin: .7rem 1rem;
  color: ${(props) => props.theme.colors.gray};
`;



export const SearchBar = ({
  barText,
  setBarText,
  setData
}) => {

    const [text, setText] = useState(barText)
    useEffect(() => {
      setText(barText)
    }, [barText])

    const handleKeyDown = (e) => {
      setBarText(e.target.value)
      if (e.key === 'Enter'){
        setData(e.target.value)
      }
    }
    
    return (
        <SearchBox>
          <Icon><FontAwesomeIcon icon={faSearch} /></Icon>
          <Bar 
            type="text" 
            placeholder="Search..."
            text={text}
            onKeyDown={(e) => {
              handleKeyDown(e)
            }}
          ></Bar>
        </SearchBox>
    )
};

export default SearchBar;