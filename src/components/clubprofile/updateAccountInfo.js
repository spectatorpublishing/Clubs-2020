import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
/* Pop-up Content Components */
import ManageAccount from './manageAccount';
import ChangeEmail from './changeEmail';
import ChangePassword from './changePassword';
import Confirmation from './confirmation';

/* Todo: When the window pop-up, should the rest of the page be unclickable? */
const Modal = styled.div`
    position: absolute;
    top: 7%;
    margin: 0 15%;
    z-index: 999;
    width: 60%;
    background-color: white;
    box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.05);
    border-radius: 9px;
    padding: 2em 2em;
`

const Close = styled.button`
    background-color: inherit;
    color: ${props=>props.theme.colors.black};
    border: none;
    /* position in parent: top right */
    position: absolute;
    top: 1em;
    right: 1em;
`

const KeyToComponent = {
    dashboard: ManageAccount,
    email: ChangeEmail,
    password: ChangePassword,
    confirmation: Confirmation
}

const Content = ({page, ...props}) => {
    return React.createElement(KeyToComponent[page], props);
}

function UpdateAccount(props) {
    const [currPage, setCurrPage] = useState('dashboard');

    function reset() {
        props.toggle(false);
        setCurrPage('dashboard');
    }

    if (props.display) {
        return (
            <Modal>
                <Close onClick={reset}>&#10006;</Close>
                <Content page={currPage} setPage={setCurrPage} />
            </Modal>
        )
    }

    return null;
}

export default function Wrapper({nodeId, ...props}) {
    const domNode = document.getElementById(nodeId);

    return ReactDOM.createPortal(<UpdateAccount {...props}/>, domNode);
}
