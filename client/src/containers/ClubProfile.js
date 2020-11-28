import React, { useState, useEffect, isMobile } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import ExploreBox from '../components/explorebox/index';
import MainContent from '../components/profileMainContent/index';
import { ProfilePageBox } from "../components/profilePageBox";
import { Navbar } from "../components/navbar";

export const ClubProfile = ({ match }) => {
    /*const {
        params: {clubId},
    } = match;
    const [club, setClub] = useState();
    const date = new Date(Date.UTC(2012, 11, 20, 0, 0, 0));
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const [width, setWidth] = useState(window.innerWidth);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        fetch(`https://swapi.dev/api/people/${clubId}`, {})
          .then((res) => res.json())
          .then((response) => {
            setClub(response);
            setLoading(false);
            console.log(`https://swapi.dev/api/people/${clubId}`);
          })
          .catch((error) => console.log(error));
    }, [clubId]);

    if (width < 768){
        return (
            <>
                {!isLoading && (
                <Wrapper>
                    <Navbar/>
                    <PageWrapper>
                        <Content>
                            <h1>Columbia University Jazz Ensemble</h1>
                            <p>Last updated: {date.toLocaleDateString("en-US", options)}</p>
                            <ProfilePageBox 
                                memberRange= {club.member_range}
                                acceptingMembers= {club.accepting_members}
                                applicationRequired= {club.application}
                                tags= {club.tags}
                            />
                            <MainContent
                                name= {club.name}
                                description= {club.description}
                                lastUpdated= {new Date(club.last_updated)}
                                //meetingFrequency= {club.meeting_frequency}
                                highlights= {club.highlights}
                                howToJoin= {club.how_to_join}
                                applicationLink= {club.app_link}
                                similarClubs= {club.similar}
                            />
                            <h2>Similar Clubs</h2>
                            <ExploreBox 
                                name = {club.name}
                                description = {club.description}
                                imageURL = {club.image_url}
                                tags = {club.tags}
                                clubSize = {club.member_range}
                                acceptingMembers = {club.accepting_members}
                                applicationRequired = {club.application}
                                cardLink="/home"
                            />
                        </Content>
                    </PageWrapper>
                </Wrapper>
           )}
            </>
        );
    } else {
        return (
            <>
                {!isLoading && (
                    <Wrapper>
                        <Navbar/>
                        <PageWrapper>
                            <Content>
                                <h1>Columbia University Jazz Ensemble</h1>
                                <p>Last updated: {date.toLocaleDateString("en-US", options)}</p>
                                <MainContent
                                    name= {club.name}
                                    description= {club.description}
                                    lastUpdated= {new Date(club.last_updated)}
                                    //meetingFrequency= {club.meeting_frequency}
                                    highlights= {club.highlights}
                                    howToJoin= {club.how_to_join}
                                    applicationLink= {club.app_link}
                                    similarClubs= {club.similar}
                                /> 
                                <h2>Similar Clubs</h2>
                                <ExploreBox 
                                    name = {club.name}
                                    description = {club.description}
                                    imageURL = {club.image_url}
                                    tags = {club.tags}
                                    clubSize = {club.member_range}
                                    acceptingMembers = {club.accepting_members}
                                    applicationRequired = {club.application}
                                    cardLink="/home"
                                /> 
                            </Content>
                            <Cards>
                                <ProfilePageBox 
                                    memberRange= '20-50'
                                    acceptingMembers={true}
                                    applicationRequired={false}
                                    tags={['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                                />
                            </Cards>
                        </PageWrapper>
                    </Wrapper>
                )}
            </>
        );  
    }
};*/

    const date = new Date(Date.UTC(2012, 11, 20, 0, 0, 0)); //unsure how to set this up with given date string
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const [width, setWidth] = useState(window.innerWidth);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    },[]);

    if (width < 768){
        return (
            <>
                {!isLoading && (
                    <Wrapper>
                        <Navbar/>
                        <PageWrapper>
                            <Content>
                                <h1>Columbia University Jazz Ensemble</h1>
                                <p>Last updated: {date.toLocaleDateString("en-US", options)}</p>
                                <ProfilePageBox 
                                    memberRange= '20-50'
                                    acceptingMembers={true}
                                    applicationRequired={false}
                                    tags={['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                                />
                                <MainContent 
                                    description= "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                                    meetingFrequency= 'Meets 2x a week'
                                    highlights= {['A caring and loving community that adheres to these values', 
                                        'Friends to study, eat, and hang out with', 
                                        'Weekly get togethers at the Multicultural Affairs space with food']}
                                    howToJoin= "As a political group that has well-defined values, we look for students who share our values and take our community and work seriously. For this reason, we require an application. To respect everyone’s time and capacity, our application is short. If your application does not have any major issues, you will be invited to interview with us! Afterwards, we will email you with a decision. We try to be as inclusive as possible; in fact, our club has nearly doubled in size in the last two years."
                                    applicationLink= "https://googl.form.abcdef12345"
                                    // array of clubProfile objects
                                    similarClubs= {[]}
                                />
                                <h2>Similar Clubs</h2>
                                <ExploreBox 
                                    name = "Columbia University Jazz Ensemble" 
                                    description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                                    imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                                    tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                                    clubSize = "20-50"
                                    acceptingMembers = {false}
                                    applicationRequired = {true}
                                    cardLink="/home"
                                />
                                
                            </Content>
                        </PageWrapper>
                    </Wrapper>
                )}
            </>
        );
    } else {
        return (
            <>
                {!isLoading && (
                    <Wrapper>
                        <Navbar/>
                        <PageWrapper>
                            <Content>
                                <h1>Columbia University Jazz Ensemble</h1>
                                <p>Last updated: {date.toLocaleDateString("en-US", options)}</p>
                                <MainContent 
                                    description= "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                                    meetingFrequency= 'Meets 2x a week'
                                    highlights= {['A caring and loving community that adheres to these values', 
                                        'Friends to study, eat, and hang out with', 
                                        'Weekly get togethers at the Multicultural Affairs space with food']}
                                    howToJoin= "As a political group that has well-defined values, we look for students who share our values and take our community and work seriously. For this reason, we require an application. To respect everyone’s time and capacity, our application is short. If your application does not have any major issues, you will be invited to interview with us! Afterwards, we will email you with a decision. We try to be as inclusive as possible; in fact, our club has nearly doubled in size in the last two years."
                                    applicationLink= "https://googl.form.abcdef12345"
                                    // array of clubProfile objects
                                    similarClubs= {[]}
                                />
                                <h2>Similar Clubs</h2>
                                <ExploreBox 
                                    name = "Columbia University Jazz Ensemble" 
                                    description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                                    imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                                    tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                                    clubSize = "20-50"
                                    acceptingMembers = {false}
                                    applicationRequired = {true}
                                    cardLink="/home"
                                /> 
                            </Content>
                            <Cards>
                                <ProfilePageBox 
                                    memberRange= '20-50'
                                    acceptingMembers={true}
                                    applicationRequired={false}
                                    tags={['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                                />
                            </Cards>
                        </PageWrapper>
                    </Wrapper>
                )}
            </>
        );  
    }
};

const Wrapper = styled.div`
  background-color: #F4F6F8;
  background-image: url(https://clubs-cu.s3.amazonaws.com/Profile+Wave.svg);
  background-repeat: no-repeat;
  background-position: top right;
  width: fit-content;
`;


const PageWrapper = styled.main`
    display: flex;
    flex-direction: row;
    padding: 4rem 5rem 0rem 5rem;

    h2{
        font-size: 20px;
    }

    @media only screen 
    and (max-width : 768px) {
        padding: 1.2rem;
    }
`;

const Cards = styled.div`
    @media only screen 
    and (min-width : 768px) {
        width: 30%;
        div{
            position: -webkit-sticky;
            position: sticky;
            top: 15px;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen 
    and (min-width : 768px) {
        width: 70%;
        padding-right: 1.5rem;
    }
    
    
    h1{
        margin-bottom: 0px;
    }
`;
