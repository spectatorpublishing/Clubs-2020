import React from "react";
import styled from "styled-components";
import FilledButton from '../tomatoButton/index';

const YourClubProfile = () => {
    return(
         <BoxWrapper>
            <TheHeader>
                <h1> Your Club Profile </h1>
            </TheHeader>
            <TheButton>
                <FilledButton text='Edit'/>
            </TheButton>
         </BoxWrapper>
    );
};

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray};
    padding: 2rem 4rem 2rem 4rem;

    @media (max-width: 768px) {
        padding: 0rem 1rem 0rem 1rem;
    }
;
`;

const TheHeader = styled.div`

;
`;

const TheButton = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 8rem; //8em
    height: 2.5rem;
;
`;

export default YourClubProfile;

/*
export const EditButton = () => {
    return(
      <BoxWrapper>
          <Text>Edit</Text>
      </BoxWrapper>
    );
};

const BoxWrapper = styled.div`
    margin: 20px;
    width: 8rem; //8em
    height: 2.5rem;
    background-color: ${(props) => props.theme.colors.red};
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        background-color: ${(props) => props.theme.colors.darkRed};
    }
`;

const Text = styled.div`
    color: white;
    margin: 10px;
    font-weight: 600;
`;
*/