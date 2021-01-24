import React from "react";
import styled from "styled-components";

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

export const ListOfClubs = ({clubs,columnTitles}) => {
    /* Toggles the <MoreInfo /> component */
    const expandInfo = (index) => {
        var isDisplayed = document.getElementById(`more-info-${index}`).style.display;
        if ( isDisplayed === 'inherit')
            document.getElementById(`more-info-${index}`).style.display = 'none';
        else
            document.getElementById(`more-info-${index}`).style.display = 'inherit'
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
                <div key={index}>
                    <Row>
                        <Column>{club.clubName}</Column>
                        <Column>{club.email}</Column>
                        <Column>{club.dateApplied}</Column>
                        <Column onClick={()=>expandInfo(index)}>
                            View Information <DownwardArrow className="fa">&#xf107;</DownwardArrow>
                        </Column>
                        {club.actions ? club.actions.map((action,i)=>{
                            return(<ActionColumn key={i}> {action}</ActionColumn>)
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
