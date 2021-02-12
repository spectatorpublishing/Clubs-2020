import React from "react";
import styled from "styled-components";
import { Deny, Plain } from './Controllers'
import { column2attrName } from './testData'

/* grid-template-column for different sections */
const page2grid = {
    'pending': '25% 20% 15% 20% 10% 10%',
    'approved': '3.5fr 3fr 2fr 2fr 3fr 1.5fr',
    'trash': '3.5fr 3fr 2fr 3.5fr 3fr 1.5fr'
}

const ColumnTitle = styled.p`
    font-weight: bold;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: ${props => page2grid[props.page]};
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

export const ListOfClubs = ({clubs, actions, columnTitles, page}) => {
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
            <Row page={page}>
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
                    {/* TODO: Row takes a page attribute to create a corresponding grid template */}
                    <Row page={page}>
                        {/* TODO: map column titles to <Column> components, need a column2attrName object */}
                        {columnTitles.map((title,index) => {
                            let attr = column2attrName[title]
                            console.log(attr, club[attr])
                            return <Column key={index}>{club[attr]}</Column>
                        })}
                        {/* <Column>{club.clubName}</Column>
                        <Column>{club.email}</Column>
                        <Column>{club.dateApplied}</Column> */}
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
