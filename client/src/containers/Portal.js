import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ListOfClubs } from "../components/ListOfClubs/ListOfClubs"
import { joinAccountProfile as fetchApplications } from '../components/ListOfClubs/wrapper'

export const PageWrapper = styled.div`
    margin: 0 5%;
    font-family: 'Manrope', sans-serif;
    padding-top: 7rem;
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
    margin: 3% ${props => props.page === 'pending' ? '10%' : '0'} 3% 0;
`;
const ApprovedSection = styled.div`
    margin: 3% 0;
    text-decoration: none;
    cursor: pointer;
`;
const TrashSection = styled.div`
    margin: 3% 0;
    text-decoration: none;
    cursor: pointer;
`;

const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const PageButton = styled.button`
    border-radius: 0.4375rem;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: auto 0rem auto 0rem;
    color: ${(props) => props.theme.colors.red};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.red};
`;


const page2columns = {
    pending: ["Club name:", "Email:", "Date applied:"],
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

const page2dbAttr = {
    pending: 'pending',
    approved: 'accepted',
    trash: 'denied'
}

export const Portal = ({authLevel}) => {
    /* 
     * @page:   current page: Pending / Approved / Trash
     * @data:   array of club applications to render
     * @ready:  true when data has been fetched
    */
    const [page, setPage] = useState('pending')
    const [data, setData] = useState([])
    const [ready, setReady] = useState(false)

    console.log("authLevel from portal")
    console.log(authLevel)

    useEffect(() => {
        fetchApplications(page2dbAttr[page])
            .then(data => {
                setData(data);
                setReady(true);
            })
            .catch(err => console.log(err))
    }, [page])

    const switchPage = (toPage) => {
        if (toPage === page)
            return;

        setReady(false);
        setPage(toPage);
    }
    //console.log("authLevel")
    //console.log(authLevel)
    if (!ready)
        return (
            <PageWrapper>
                <Loading>Loading...</Loading>
            </PageWrapper>
        )
    else
        if(authLevel == "admin") 
            return (
                <PageWrapper>
                    <HeadingDiv>
                        {page === 'pending' ? <h1>LionClubs Admin Portal</h1> : <PageButton onClick={() => switchPage('pending')}>Back</PageButton>}
                        <PageButton>Log out</PageButton>
                    </HeadingDiv>
                    <ActiveSection page={page}>
                        <h2>{page2heading[page]}</h2>
                        <ListOfClubs columnTitles={page2columns[page]} clubs={data} actions={page2actions[page]} page={page} />
                    </ActiveSection>

                    { page === 'pending' ? (
                        <>
                            <ApprovedSection>
                                <PageButton onClick={() => switchPage('approved')}>List of Approved Clubs</PageButton>
                            </ApprovedSection>
                            <TrashSection>
                                <PageButton onClick={() => switchPage('trash')}>Trash</PageButton>
                            </TrashSection>
                        </>
                    ) : null
                    }
                </PageWrapper>
            )
        else 
            return (
                <PageWrapper>
                    <Loading>Not Authenticated to Access Admin Portal</Loading>
                </PageWrapper>
            )
}
