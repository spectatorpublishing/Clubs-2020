import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ListOfClubs } from "../components/ListOfClubs/ListOfClubs"
import { joinAccountProfile as fetchApplications } from '../components/ListOfClubs/wrapper'

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
    margin: 3% ${props => props.page === 'pending' ? '10%' : '0'} 3% 0;
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

const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

export const Portal = () => {
    /* 
     * @page:   current page: Pending / Approved / Trash
     * @data:   array of club applications to render
     * @ready:  true when data has been fetched
    */
    const [page, setPage] = useState('pending')
    const [data, setData] = useState([])
    const [ready, setReady] = useState(false)

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

    if (!ready)
        return (
            <PageWrapper>
                <Loading>Loading...</Loading>
            </PageWrapper>
        )

    return (
        <PageWrapper>
            <HeadingDiv>
                {page === 'pending' ? <h1>Clubs@CU Admin Portal</h1> : <p onClick={() => switchPage('pending')}>Back</p>}
                <p>Log out</p>
            </HeadingDiv>
            <ActiveSection page={page}>
                <h3>{page2heading[page]}</h3>
                <ListOfClubs columnTitles={page2columns[page]} clubs={data} actions={page2actions[page]} page={page} />
            </ActiveSection>

            { page === 'pending' ? (
                <>
                    <ApprovedSection>
                        <h3 onClick={() => switchPage('approved')}>List of Approved Clubs</h3>
                    </ApprovedSection>
                    <TrashSection>
                        <h3 onClick={() => switchPage('trash')}>Trash</h3>
                    </TrashSection>
                </>
            ) : null
            }
        </PageWrapper>
    )
}
