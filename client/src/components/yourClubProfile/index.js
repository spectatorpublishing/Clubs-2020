import React from "react";
import styled from "styled-components";
import FilledButton from '../tomatoButton/index';

const YourClubProfile = () => {
    return(
         <BoxWrapper>
            <TheHeader>
                <h1> Your Club Profile </h1>
            </TheHeader>
            <TheButton href='/profile-creation'>
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

const TheButton = styled.a`
    display: flex;
    flex-direction: row-reverse;
    width: 8rem; //8em
    height: 2.5rem;
    text-decoration: none;
`;

export default YourClubProfile;