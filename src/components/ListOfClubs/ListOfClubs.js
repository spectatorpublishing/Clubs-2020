import React from "react";
import styled from "styled-components";
import { Deny, Plain } from './Controllers'

const ColumnTitle = styled.p`
    font-weight: bold;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 25% 20% 15% 20% 10% 10%;
`;

const Column = styled.p`
    margin: 2% 0;
    padding: 0 1% 1% 0;
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

export const ListOfClubs = ({clubs, actions, columnTitles}) => {
    /* Toggles the <MoreInfo /> component */
    const expandInfo = (index) => {
        var isDisplayed = document.getElementById(`more-info-${index}`).style.display;
        if ( isDisplayed === 'inherit')
            document.getElementById(`more-info-${index}`).style.display = 'none';
        else
            document.getElementById(`more-info-${index}`).style.display = 'inherit'
    }

    /* test is a placeholder for the actual API */
    const test = (club, action) => {
        alert(`You ${action}ed ${club}'s request!`)
    }

    const deny_test = (club, reason) => {
        alert(`You denied ${club}'s request because ${reason}!`)
    }

    /* TODO: substitute with actual APIs */
    const action2handler = {
        Accept: test,
        Deny: deny_test,
        Undo: test,
        Remove: test
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
                        {actions ? actions.map((action,i)=>{
                            /* pass in a unique handler for each club and type */
                            if ( action === 'Deny')
                                return (<Deny key={i} clubInfo={club} num={index} handler={action2handler[action]} />)
                            else
                                return (<Plain key={i} clubInfo={club} num={index} handler={action2handler[action]} action={action} />)
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
