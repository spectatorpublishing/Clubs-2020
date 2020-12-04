import React, { useState, useEffect } from 'react';
import { Navbar } from "../components/navbar";
import ExploreBox from '../components/explorebox';
import styled from 'styled-components';
import Join from '../components/filters/join';
import Shuffle from '../components/filters/shuffle';
import Size from '../components/filters/size';
import Type from '../components/filters/type';
import FilterMobile from '../components/filters/filterMobile';

const Wrapper = styled.div`
  background-color: #F4F6F8;
  background-image: url(https://clubs-cu.s3.amazonaws.com/columbia-wave.svg);
  background-repeat: no-repeat;
  background-position: top right;
`;

const PageWrapper = styled.div`
    padding: 0.5rem 3rem 3rem 3rem;

    @media only screen and (max-width : 768px) {
        padding: 1rem 0.5rem;
    }
`;

const BottomWrapper = styled.div`
    height: 70px;
    width: 100%;
    z-index: 1;
    background-color: #F4F6F8;
    position: fixed;
    bottom: 0;

    @media only screen and (min-width : 769px) {
        display: none;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    h1{
        padding: 1rem 1rem 0 1rem;
    }

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 1.2rem;
        color: #9A9A9A;
        padding: 1rem 1rem 0 1rem;
    }

    @media only screen and (max-width : 769px) {
        flex-direction: column;

        h1{
            font-size: 30px;
            padding: 0 0 0 .5rem;
            margin: 0;
        }

        p{
            font-size: 18px;
            padding: 0.5rem 0 0 .5rem;
            margin: 0;
        }
    }
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width : 768px) {
        justify-content: center;
    }
`;

const CardWrapper = styled.div`
    width: 50%;
    
    @media only screen and (max-width : 768px) {
            width: 95%;
        }
`;

const FiltersBox = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 1rem 2rem 1rem;

    @media only screen and (max-width : 768px) {
        margin: .5rem 1.5rem;
    }
`;

const Filter = styled.div`
    margin-right: 1.5rem;

    @media only screen and (max-width : 768px) {
            display: none;
        }
`;

const FilterBottom = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -65px;
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
                                cardLink="/home"
                            />
                        </CardWrapper>
                    )))} 
                </CardsContainer>  
                <BottomWrapper>
                    <FilterBottom><FilterMobile /></FilterBottom>
                </BottomWrapper>
            </PageWrapper>
        </main>
        </Wrapper>
    )
}
