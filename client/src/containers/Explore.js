import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/navbar';
import ExploreBox from '../components/explorebox';
import styled from 'styled-components';
import Join from '../components/filters/join';
import Shuffle from '../components/filters/shuffle';
import Size from '../components/filters/size';
import Type from '../components/filters/type';

const Wrapper = styled.div`
  background-color: #f4f6f8;
  background-image: url(https://clubs-cu.s3.amazonaws.com/columbia-wave.svg);
  background-repeat: no-repeat;
  background-position: top right;
`;

const PageWrapper = styled.div`
  padding: 0.5rem 3rem 3rem 3rem;

  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  h1 {
    padding: 1rem;
    padding-bottom: 0;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    color: #9a9a9a;
    padding: 1rem;
    padding-bottom: 0;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

const CardWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const FiltersBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 1rem 2rem 1rem;
`;

const Filter = styled.div`
  margin-right: 1.5rem;
`;

const ShuffleBox = styled.div`
  margin-left: auto;
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
            })
            .catch(error => console.log(error));    
    }, []);

    return(
        <Wrapper>
        <Navbar />
        <main>
            <PageWrapper>
                <TextWrapper>
                    <h1>Explore Clubs</h1>
                    <p>Find your Columbia community</p>
                </TextWrapper>
                <FiltersBox>
                    <Filter><Type /></Filter>
                    <Filter><Size /></Filter>
                    <Filter><Join /></Filter>
                    <ShuffleBox><Shuffle /></ShuffleBox>
                </FiltersBox>
                <CardsContainer>
                    {(clubProfiles.length === 0) ? (<h1>Loading</h1>) : (clubProfiles.map(profile => (
                        <CardWrapper>
                            <ExploreBox 
                                name = {profile.name}
                                description = {profile.shortDescription}
                                imageURL = {profile.imageUrl}
                                tags = {profile.tags}
                                clubSize = {profile.memberRange}
                                acceptingMembers = {profile.acceptingMembers}
                                applicationRequired = {profile.applicationRequired}
                                cardLink={`/club/${profile._id}`}
                            />
                        </CardWrapper>
                    )))} 
                </CardsContainer>    
            </PageWrapper>
        </main>
        </Wrapper>
    )
}
