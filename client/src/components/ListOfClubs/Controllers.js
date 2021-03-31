import React, { useState } from "react";
import styled from "styled-components";
import { setAccountStatus } from './wrapper'

const ActionColumn = styled.p`
    margin: 2% 0;
    padding: 0 1% 1% 0;
    text-decoration: underline;
    cursor: pointer;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    overflow: visible;
`
const Reason = styled.input`
    border: 1px solid #C4C4C4;
    color: #C4C4C4;
    font-size: 1rem;
    padding: 1em .5em;
    margin: -.5em 1em 1em 0;
`

const action2status = {
    'Accept': 'accepted',
    'Deny': 'denied',
    'Undo': 'pending',
    'Remove': 'denied'
}

/*
 * function to change the status of an application
 * On success, delete the club
 * On failure, prompt failed & toggle
*/
function changeStatus(clubInfo, num, action, reason) {
    setAccountStatus(clubInfo.accountId, action2status[action], reason)
        .then(success => {
            if (success)
                document.getElementById(`${clubInfo.clubName}-${num}`).remove();
        })
        .catch(err => {
            alert('Operation failed. Please contact SpecTech...')
            console.log(err)
        })
}

/* @props: clubInfo of the club being denied, API for denying a request */
export function Deny({ clubInfo, num }) {
    /* showField toggles the input field for entering reason of rejection */
    const [showField, setShowField] = useState(false)
    const [reason, setReason] = useState('')

    const handleClick = () => setShowField(!showField)

    const handleInput = (e) => {
        e.preventDefault()
        setReason(e.target.value)
    }

    /* deny handler wrapper */
    const handleDeny = () => {
        changeStatus(clubInfo, num, 'Deny', reason);
    }

    if (showField) {
        return (
            <Row>
                <Reason type='text' placeholder='Reason...' value={reason} onChange={handleInput} />
                <ActionColumn onClick={handleDeny}>Confirm</ActionColumn>
            </Row>
        )
    } else {
        return (
            <ActionColumn onClick={handleClick}>Deny</ActionColumn>
        )
    }
}

export function Plain({ clubInfo, num, action }) {
    /* handler wrapper */
    const handleAccept = () => {
        changeStatus(clubInfo, num, action);
    }

    return (<ActionColumn onClick={handleAccept}>{action}</ActionColumn>)
}

