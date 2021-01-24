import React from "react";
import styled from "styled-components";
import { Deny } from './Controllers'

const ColumnTitle = styled.p`
    font-weight: bold;
`;
const Row = styled.div`
    /* display: flex; */
    /* flex-direction: row; */
    display: grid;
    grid-template-columns: 25% 20% 15% 20% 10% 10%;
`;
const Column = styled.p`
    /* width: 20%; */
    margin: 2% 0;
    padding: 0 1% 1% 0;
`;
const ActionColumn = styled.p`
    margin: 2% 0;
    padding: 0 1% 1% 0;
    text-decoration: underline;
    cursor: pointer;
`;
const DownwardArrow = styled.i`
    cursor: pointer;
    padding-left: 1%;
`;

const MoreInfo = styled.div`
    display: none;
    padding: 0 0 0 1%;
    margin: 1% 0 2% 0;
    div{
        display: grid;
        grid-template-columns: 8% 88%;
        font-size: 90%;
        p{
            margin: 0;
            padding: 11% 0 ;
        }
        span{
            padding: 1% 0 1% 2%;
        }
    }
`;

/*
    A unique handler is created for each controller button (Accept/Deny/Undo/Remove) for the purpose of (1)

    Todos:
        1. [x] Figure out a way s.t when the user ACCEPTS, we know which club is being acted upon
        2. [x] create a unique component for Deny
        3. [x] find a way to efficiently delete club from list upon successful action

*/

export const ListOfClubs = ({clubs,columnTitles}) => {
    /* Toggles the <MoreInfo /> component */
    const expandInfo = (index) => {
        var isDisplayed = document.getElementById(`more-info-${index}`).style.display;
        if ( isDisplayed === 'inherit')
            document.getElementById(`more-info-${index}`).style.display = 'none';
        else
            document.getElementById(`more-info-${index}`).style.display = 'inherit'
    }

    /* accept_test is a placeholder for the actual API */
    const accept_test = (club) => {
        alert(`You accepted ${club}'s request!`)
    }

    const deny_test = (club, reason) => {
        alert(`You accepted ${club}'s request because ${reason}!`)
    }

    return(
        <div>
            {/* Renders Table Column Titles specified in `title` */}
            <Row>
                {columnTitles.map((title,columnIndex)=>{
                    return(
                        <ColumnTitle key={columnIndex}>{title}</ColumnTitle>
                    )
                })}
            </Row>
            {/* Renders a list of clubs in the section */}
            {clubs.map((club,index)=>{
                const moreInfo = club.moreInfo;
                return (
                <div key={index} id={`${club.clubName}-${index}`}>
                    <Row>
                        <Column>{club.clubName}</Column>
                        <Column>{club.email}</Column>
                        <Column>{club.dateApplied}</Column>
                        <Column onClick={()=>expandInfo(index)}>
                            View Information <DownwardArrow className="fa">&#xf107;</DownwardArrow>
                        </Column>
                        {club.actions ? club.actions.map((action,i)=>{
                            /* create a unique handler for each club and type */
                            let handleAccept = () => accept_test(club.clubName)

                            if ( action === 'Accept')
                                return(<ActionColumn onClick={handleAccept} key={i}>{action}</ActionColumn>)
                            else
                                return (<Deny key={i} clubInfo={club} num={index} handler={deny_test} />)
                                // return(<ActionColumn key={i}>{action}</ActionColumn>)
                        }): null}
                    </Row>
                    
                    {/* This can be toggled by cliking the **View Information** button */}
                    <MoreInfo id={`more-info-${index}`} >
                        <div> 
                            <p>Description:</p>
                            <span >{moreInfo.description}</span> 
                        </div>
                        <div>
                            <p>Highlights:</p>
                            <span > {moreInfo.highlights}</span>  
                        </div>
                    </MoreInfo>
                </div>
                )
            })}
        </div>

        
    )
}
