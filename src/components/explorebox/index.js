import React from 'react';
import styled from 'styled-components';

const Box = styled.button`
    background-color: white;
    box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    border: none;
    text-align: left;
    width: 30rem;
    margin: 2rem;
    padding: 2rem;
`;

const Row = styled.div`
    display:flex; 
    flex-direction:row;
`;

const Column = styled.div`
    display = flex;
    flex-direction = column;
`;

const Icon = styled.div`
    padding: 5px;
`;

const Tags = styled.div`
    border-style = solid;
`;

const Item = styled.div`
    padding: 0.2rem;
`;




export const ExploreBox = ({ name, description, imageURL, tags, clubSize, acceptingMembers, applicationRequired, cardLink }) => {
    return (
      <Box onClick={event =>  window.location.href={cardLink}}> 
        <Row>
            <Column>
                <h1>{name}</h1>
                <p>{description}</p>
            </Column>
            <Icon>{imageURL}</Icon>
        </Row>
        <Tags>{tags}</Tags>
        <Row>
            <Item>{clubSize}</Item>
            <Item>{acceptingMembers}</Item>
            <Item>{applicationRequired}</Item>
        </Row>
      </Box>
    );
  };