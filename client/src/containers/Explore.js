import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/navbar';
import ExploreBox from '../components/explorebox';
import styled from 'styled-components';
import Join from '../components/filters/join';
import Shuffle from '../components/filters/shuffle';
import Size from '../components/filters/size';
import Type from '../components/filters/type';
import adCarrier from '../components/adCarrier';
import SearchBar from '../components/searchBar';
import FilterMobile from '../components/filters/filterMobile';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
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
        color: ${(props) => props.theme.colors.gray};
        padding: 1rem 1rem 0 1rem;
    }

    @media only screen and (max-width : 768px) {
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

    @media only screen and (max-width : 1024px) {
            display: none;
        }
`;

const FiltersLeft = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;

    @media only screen and (max-width : 768px) {
        flex-grow: 1;
    }
`;

const FilterBottom = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -65px;
`;

const SearchBox = styled.div`
  margin-right: 1.5rem;

  @media only screen and (max-width : 768px) {
        flex-grow: 1;
    }
`;

const ShuffleBox = styled.div`
  margin-left: auto;
`;

const AdBox = styled.div`
  margin-top: 1.5rem;
  color: black;
  background: grey;
  height: 90px;
  width: 728px;
  margin-left: auto;
  margin-right: auto;
`

const AdBoxMobile = styled.div`
  margin-top: 1.5rem;
  color: black;
  background: grey;
  height: 50px;
  width: 328px;
  margin-left: auto;
  margin-right: auto;
`

export const Explore = () => {
    const [clubProfiles, setClubProfiles] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
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

    if (width < 840){ // mobile view
    return(
        <Wrapper>
        <Navbar />
        <main>
            <PageWrapper>
                <AdBoxMobile>
                    <adCarrier
                    Height={50}
                    Width={328}
                    Path="cds_leaderboard"
                    />
                </AdBoxMobile>
                <TextWrapper>
                    <h1>Explore Clubs</h1>
                    <p>Find your Columbia community</p>
                </TextWrapper>
                <FiltersBox>
                    <FiltersLeft>
                        <SearchBox><SearchBar></SearchBar></SearchBox>
                        <Filter><Type /></Filter>
                        <Filter><Size /></Filter>
                        <Filter><Join /></Filter>
                    </FiltersLeft>
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
                <BottomWrapper>
                    <FilterBottom><FilterMobile /></FilterBottom>
                </BottomWrapper>
            </PageWrapper>
        </main>
        </Wrapper>
    )
    } else { //desktop view
        return(
        <Wrapper>
        <Navbar />
        <main>
            <PageWrapper>
                <AdBox>
                    <adCarrier
                    Height={90}
                    Width={728}
                    Path="cds_leaderboard"
                    />
                </AdBox>
                <TextWrapper>
                    <h1>Explore Clubs</h1>
                    <p>Find your Columbia community</p>
                </TextWrapper>
                <FiltersBox>
                    <FiltersLeft>
                        <SearchBox><SearchBar></SearchBar></SearchBox>
                        <Filter><Type /></Filter>
                        <Filter><Size /></Filter>
                        <Filter><Join /></Filter>
                    </FiltersLeft>
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
                <BottomWrapper>
                    <FilterBottom><FilterMobile /></FilterBottom>
                </BottomWrapper>
            </PageWrapper>
        </main>
        </Wrapper>
    )
    }
}
