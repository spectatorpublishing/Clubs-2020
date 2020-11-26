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

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen 
    and (max-width : 768px) {
        justify-content: space-around;
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
            });    
    }, []);

    return(
        <Wrapper>
        <Navbar />
        <main>
            <PageWrapper>
                <h1>Explore Clubs</h1>
                <FiltersBox>
                    <Filter><Type /></Filter>
                    <Filter><Size /></Filter>
                    <Filter><Join /></Filter>
                    <ShuffleBox><Shuffle /></ShuffleBox>
                </FiltersBox>
                <CardsWrapper>
                    {(clubProfiles.length === 0) ? (<h1>Loading</h1>) : (clubProfiles.map(profile => (
                        <ExploreBox 
                            name = {profile.name}
                            description = {profile.shortDescription}
                            imageURL = {profile.imageUrl}
                            tags = {profile.tags}
                            clubSize = {profile.memberRange}
                            acceptingMembers = {profile.acceptingMembers}
                            applicationRequired = {profile.applicationRequired}
                            cardLink="/home"
                        />
                    )))}; 
                </CardsWrapper>    
            </PageWrapper>
        </main>
        </Wrapper>
    )
}
