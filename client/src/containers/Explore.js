import React, { useState, useEffect } from 'react';
import { Navbar } from "../components/navbar";
import ExploreBox from '../components/explorebox';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #F4F6F8;
  background-image: url(https://clubs-cu.s3.amazonaws.com/columbia-wave.svg);
  background-repeat: no-repeat;
  background-position: top right;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen 
    and (max-width : 768px) {
        flex-direction: column;
    }
`;

const PageWrapper = styled.div`
    padding: 3rem;

    h1{
        padding: 1rem;
    }

    @media only screen 
    and (max-width : 768px) {
        padding: 0.5rem;
    }
`;

export const Explore = () => {
    const [clubProfiles, setClubProfiles] = useState([]);

    useEffect(() => {
        fetch(`api/clubProfiles/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    name: 'Columbia University Jazz Ensemble',
                    shortDescription: `A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles.`,
                    longDescription: `A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles.`,
                    lastUpdated: new Date('06/04/2020'),
                    imageUrl: 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png', 
                    memberRange: '20-50',
                    acceptingMembers: true,
                    springRecruiting: true,
                    fallRecruiting: true,
                    applicationRequired: true,
                    meetingFrequency: 'Meets 2x a week',
                    socialLinks: [{facebook: ''}, {email: 'cujazz@columbia.edu'}, {website: 'clubwebsite.com'}],
                    tags: ['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional'],
                    highlights: ['A caring and loving community that adheres to these values', 
                        'Friends to study, eat, and hang out with', 
                        'Weekly get togethers at the Multicultural Affairs space with food'],
                    howToJoin: `As a political group that has well-defined values, we look for students who share our values and take our community and work seriously. 
                    For this reason, we require an application. To respect everyone’s time and capacity, our application is short. If your application does not have any major 
                    issues, you will be invited to interview with us! Afterwards, we will email you with a decision. We try to be as inclusive as possible; in fact, 
                    our club has nearly doubled in size in the last two years.`,
                    applicationLink: 'https://googl.form.abcdef12345',
                    showInstagramFeed: false,
                })
            })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                  }
                  const error = new Error(`HTTP Error ${response.statusText}`);
                  error.status = response.statusText;
                  error.response = response;
                  console.log(error);
                  throw error;
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setClubProfiles([...clubProfiles, json]);
            });    
    }, []);

    return(
        <Wrapper>
        <Navbar />
        <main>
            <PageWrapper>
                <h1>Explore Clubs</h1>
                <Row>
                    {clubProfiles.length === 0 ? (<h1>Loading</h1>) : (
                        <ExploreBox 
                            name = {clubProfiles[0].name}
                            description = {clubProfiles[0].shortDescription}
                            imageURL = {clubProfiles[0].imageUrl}
                            tags = {clubProfiles[0].tags}
                            clubSize = {clubProfiles[0].clubSize}
                            acceptingMembers = {clubProfiles[0].acceptingMembers}
                            applicationRequired = {clubProfiles[0].applicationRequired}
                            cardLink="/home"
                        />
                    )}
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {false}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                </Row>
                <Row>
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {true}
                        cardLink="/home"
                    />
                </Row>
                <Row>
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                </Row>
            </PageWrapper>
        </main>
        </Wrapper>
    )
}
