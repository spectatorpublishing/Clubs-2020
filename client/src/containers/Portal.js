import React, { useState } from "react";
import styled from 'styled-components';
import { ListOfClubs } from "../components/ListOfClubs/ListOfClubs"
import fetchClubs from '../components/ListOfClubs/testData'

export const PageWrapper = styled.div`
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

const ActiveSection = styled.div`
    margin: 3% ${props => props.page === 'pending' ? '10%' : '0' } 3% 0;
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


const page2columns = {
    pending: [ "Club name:", "Email:", "Date applied:"],
    approved: ['Club name:', 'Email:', 'Date approved:', 'Last update:'],
    trash: ['Club name:', 'Email:', 'Date removed:', 'Reason for Removal:']
}

const page2actions = {
    pending: ['Accept', 'Deny'],
    approved: ['Remove'],
    trash: ['Undo']
}

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
                { page === 'pending' ? <h1>Clubs@CU Admin Portal</h1> : <p onClick={()=> switchPage('pending')}>Back</p> }
                <p>Log out</p>
            </HeadingDiv>
            <ActiveSection page={page}>
                <h3>{page2heading[page]}</h3>
                <ListOfClubs columnTitles={page2columns[page]} clubs={fetchClubs(page)} actions={page2actions[page]} page={page} />
            </ActiveSection>

            { page === 'pending' ? (
                <>
                    <ApprovedSection>
                        <h3 onClick={()=>switchPage('approved')}>List of Approved Clubs</h3>
                    </ApprovedSection>
                    <TrashSection>
                        <h3 onClick={()=>switchPage('trash')}>Trash</h3>
                    </TrashSection>
                </>
                ) : null
            }
        </PageWrapper>
        
    )
}
