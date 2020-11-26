import React, { useState, useEffect } from 'react';
import { Navbar } from "../components/navbar";
import ExploreBox from '../components/explorebox';
import styled from 'styled-components';
import Join from '../components/filters/join';
import Shuffle from '../components/filters/shuffle';
import Size from '../components/filters/size';
import Type from '../components/filters/type';

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
        fetch(`api/clubProfiles/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }})
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
                setClubProfiles(json);
            });    
    }, []);

    return(
        <Wrapper>
        <Navbar />
        <main>
            <PageWrapper>
                <h1>Explore Clubs</h1>
                <Join />
                <Shuffle />
                <Size />
                <Type />

                {clubProfiles.reduce(
                    function(accumulator, currentValue, currentIndex, array) {
                        if (currentIndex % 2 === 0)
                            accumulator.push(array.slice(currentIndex, currentIndex + 2));
                        return accumulator;
                        }, []).map(profile => (
                            <Row>
                                <ExploreBox 
                                    name = {profile[0].name}
                                    description = {profile[0].shortDescription}
                                    imageURL = {profile[0].imageUrl}
                                    tags = {profile[0].tags}
                                    clubSize = {profile[0].memberRange}
                                    acceptingMembers = {profile[0].acceptingMembers}
                                    applicationRequired = {profile[0].applicationRequired}
                                    cardLink="/home"
                                />
                                <ExploreBox 
                                    name = {profile[1].name}
                                    description = {profile[1].shortDescription}
                                    imageURL = {profile[1].imageUrl}
                                    tags = {profile[1].tags}
                                    clubSize = {profile[1].memberRange}
                                    acceptingMembers = {profile[1].acceptingMembers}
                                    applicationRequired = {profile[1].applicationRequired}
                                    cardLink="/home"
                                />
                            </Row>
                        ))};      
            </PageWrapper>
        </main>
        </Wrapper>
    )
}
