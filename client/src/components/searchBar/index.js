import React from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

const Bar = styled.input`
  width: 18rem;
  padding-left: 2rem;
  border-radius: 7px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
  height: 39px;
  border: 0px;
  background-color: ${(props) => props.theme.colors.fullWhite};
  color: ${(props) => props.theme.colors.gray};
  font-family: Roboto;
  font-weight: 500;
  font-size:18px;
  line-height:21px;

  ::placeholder {
      color: inherit;
  }

  @media only screen and (max-width : 768px) {
    //width: 10rem;
    width: 95%;
  }
`;

const Icon = styled.i`
  position: absolute;
  color: black;
  background-color: pink;
`;

const IconButton = styled.button`

`;

export const SearchBar = () => {
    
    return (
        <SearchBox>
          <Icon>
            <IconButton type="submit"><i class="fas fa-search"></i></IconButton>
          </Icon>
          <Bar type="text" placeholder="Search..."></Bar>
        </SearchBox>
    )
};

export default SearchBar;