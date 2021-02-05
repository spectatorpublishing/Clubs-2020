import React from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

const Bar = styled.input`
  width: 18rem;
  padding-left: 2rem;
  border-radius: 7px;
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
`;

export const SearchBar = () => {
    
    return (
        <SearchBox>
            <Bar type="text" placeholder="Search..."></Bar>
        </SearchBox>
    )
};

export default SearchBar;