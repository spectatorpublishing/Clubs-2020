import React, { useState } from "react";
import styled from 'styled-components';
import { ListOfClubs } from "../components/ListOfClubs/ListOfClubs";

const PageWrapper = styled.div`
    margin: 0 5%;
    font-family: 'Manrope', sans-serif;
`;

const HeadingDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction:row;

    p {
        text-decoration: underline;
    }
`;

const PendingSection = styled.div`
    margin: 3% 0;
`;
const ApprovedSection = styled.div`
    margin: 3% 0;
    text-decoration: underline;
    cursor: pointer;
`;
const TrashSection = styled.div`
    margin: 3% 0;
    text-decoration: underline;
    cursor: pointer;
`;

const columnTitles = [
    "Club name:", "Email:", "Date applied:"
];
const clubs = [
    {
        "clubName": "ADI",
        "email": "adi@columbia.edu",
        "dateApplied": "11/20/20",
        "actions":["Accept","Deny"],
        "moreInfo": {
                "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
                "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
            }
        
    },
    {
        "clubName": "Multiracial Students Alliance",
        "email": "msa@columbia.edu",
        "dateApplied": "11/20/20",
        "actions":["Accept","Deny"],
        "moreInfo": {
            "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
            "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
        }
    }, 
    {
        "clubName": "Multiracial Students Alliance",
        "email": "msa@columbia.edu",
        "dateApplied": "11/20/20",
        "actions":["Accept","Deny"],
        "moreInfo": {
            "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
            "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
        }
    }   
];

const page2heading = {
    pending: 'Pending Requests',
    approved: 'Approved Clubs',
    trash: 'Trash'
}


export const Portal = () => {
    /* state indicating the current page: Pending / Approved / Trash
     * also used for page transition
    */

    const [page, setPage] = useState('pending')

    const switchPage = (toPage) => setPage(toPage)

    /* 
    * data workflow:
    *   1. On page load, make a request to bd for the list of club (type based on the state page)
    *   2. When the ACTION button (e.g Accept/Deny for pending reqs) is clicked, 
    *      make a request to bd for the corresponding actions
    * 
    *   - code for part 1 should be put in this component
    *   - code for part 2 should be put in the <ListOfClub /> 
    *   
    */
    return(
        <PageWrapper>
            <HeadingDiv>
                { page === 'pending' ? <h1>Clubs@CU Admin Portal</h1> : <p onClick={()=> switchPage('pending')}>back</p> }
                <p>Log out</p>
            </HeadingDiv>
            <PendingSection>
                <h3>{page2heading[page]}</h3>
                <ListOfClubs columnTitles={columnTitles} clubs={clubs}></ListOfClubs>
            </PendingSection>
            <ApprovedSection>
                <h3 onClick={()=>switchPage('approved')}>List of Approved Clubs</h3>
            </ApprovedSection>
            <TrashSection>
                <h3 onClick={()=>switchPage('trash')}>Trash</h3>
            </TrashSection>
        </PageWrapper>
        
    )
}
