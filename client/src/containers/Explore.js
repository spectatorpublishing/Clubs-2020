import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/navbar';
import ExploreBox from '../components/explorebox';
import styled from 'styled-components';
import Join from '../components/filters/join';
import Size from '../components/filters/size';
import Type from '../components/filters/type';
import AdCarrier from '../components/adCarrier';
import SearchBar from '../components/searchBar';
//import FilterMobile from '../components/filters/filterMobile';
import Icon from '../components/filters/shuffle.png';

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

const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    h1{
        padding: 1rem 1rem 0 1rem;
    }

    p{
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

    @media only screen and (min-width : 1880px) {
        width: 33%;
    }

    @media only screen and (min-width : 2800px) {
        width: 25%;
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

const FiltersBelow = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem 2rem 1rem;
    
    @media only screen and (max-width : 430px) {
        flex-direction: column;
    }

    @media only screen and (min-width : 1024px) {
        display: none;
    }
`;

const MobileFilter = styled.div`
    margin-right: 1.5rem;

    @media only screen and (max-width : 430px) {
        padding-top:10px;
        
    }

    @media only screen and (min-width : 1025px) {
        display: none;
        
    }
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

const AdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width : 768px) {
    margin-bottom: 1rem;
  }
`;

const ShuffleButton = styled.button`
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius:7px;
    width:130px;
    height:39px;
    border:0px;
    cursor: pointer;

    :hover{
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.20);
    }

    @media only screen and (max-width : 768px) {
            width: 39px;
        }
`;

const ShuffleWord = styled.div`
    /* // font-family is necessary here */
    font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';    
    font-style: normal;
    font-weight:600;
    font-size:18px;
    line-height:21px;
    text-align:center;
    color: ${(props) => props.theme.colors.gray};
    float:right;
    padding-right:15px;

    @media only screen and (max-width : 768px) {
            display: none;
        }

`;

const ShuffleImage = styled.div`
    padding-top:3px;
    float:left;
    padding-left:10px;

    @media only screen and (max-width : 768px) {
        float: none;
        padding:0;
    }
`;



const Explore = () => {
    const [clubProfiles, setClubProfiles] = useState([]);
    const [loadText, setLoadText] = useState("Loading...");

    const [sizeSelected, setSizeSelected] = useState([]);
    const [joinSelected, setJoinSelected] = useState([]);
    const [typeSelected, setTypeSelected] = useState([]);
    const [searchBarText, setSearchBarText] = useState('');

    const width = window.innerWidth;

    
    const fetchData = async (url) => {
        fetch(`api/clubProfiles/${url}`, {
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
    };

    const updateFilters = async (inputType, input) => {
        setSearchBarText('');

        let newJoin;
        let newType;
        let newSize;

        if(inputType === "type") {
            setTypeSelected(input);
            newType = input;
            newJoin = joinSelected;
            newSize = sizeSelected;
        } else if(inputType === "join") {
            setJoinSelected(input);

            newJoin = input;
            newType = typeSelected;
            newSize = sizeSelected;
        } else if(inputType === "size") {
            setSizeSelected(input);

            newSize = input;
            newType = typeSelected;
            newJoin = joinSelected;
        } 

        if (newJoin.length === 0 && newSize.length === 0 && newType.length === 0) {
            fetchData('');
            setLoadText("Loading...");
        } else {
            const tagsQuery = (newType.length === 0) ? '' : `tags=${newType.join(`&tags=`)}`;
            const memberRangeQuery = (newSize.length === 0) ? '' : `memberRange=${newSize.join(`&memberRange=`)}`;
            
            let joinQuery = '';
            if (newJoin.length !== 0) {
                const acceptingMembers = 
                    newJoin.includes('Accepting Members') ? `&acceptingMembers=true` : '';
                const applicationRequired = 
                    newJoin.includes('No Application Required') ? `&applicationRequired=false` : '';
                joinQuery = acceptingMembers + applicationRequired;
            }
   
            fetchData(`filterAndSortBy?${tagsQuery}&${memberRangeQuery}${joinQuery}`);
            setLoadText("No Clubs Match Your Criteria...")  ;
        }
    };

    const updateSearch = async (input) => {
        setSearchBarText(input);

        setSizeSelected([]);
        setTypeSelected([]);
        setJoinSelected([]);

        if (searchBarText === '') {
            fetchData('');
            setLoadText("Loading...");  
        } else {
            fetchData(`search?search=${searchBarText}`);
            setLoadText("No Clubs Match Your Criteria...");  
        }
     };

     useEffect(() => {
        fetchData('');
    },[]);

    const ExploreContents =  (
        <div>
                <TextWrapper>
                    <h1>Explore Clubs</h1>
                    <p>Find your Columbia community</p>
                </TextWrapper>
                <FiltersBox>
                    <FiltersLeft>
                        <SearchBox><SearchBar 
                            barText={searchBarText}
                            setBarText={updateSearch}
                        /></SearchBox>
                        <Filter><Type 
                            selected={typeSelected}
                            setSelected={updateFilters}
                        /></Filter>
                        <Filter><Size 
                            selected={sizeSelected}
                            setSelected={updateFilters}
                        /></Filter>
                        <Filter><Join 
                            selected={joinSelected}
                            setSelected={updateFilters}
                        /></Filter>
                    </FiltersLeft>
                    <ShuffleBox>
                        <ShuffleButton onClick={() => fetchData('')}>
                            <ShuffleImage><img src={Icon} width={15} height={15} alt="shuffle" /></ShuffleImage>
                            <ShuffleWord>Shuffle</ShuffleWord>
                        </ShuffleButton>
                    </ShuffleBox>
                </FiltersBox>
                <FiltersBelow>
                        <MobileFilter><Type 
                            selected={typeSelected}
                            setSelected={updateFilters}
                        /></MobileFilter>
                        <MobileFilter><Size 
                            selected={sizeSelected}
                            setSelected={updateFilters}
                        /></MobileFilter>
                        <MobileFilter><Join 
                            selected={joinSelected}
                            setSelected={updateFilters}
                        /></MobileFilter>
                </FiltersBelow>
                <CardsContainer>
                    {(clubProfiles.length === 0) ? (<h1>{loadText}</h1>) : (clubProfiles.map(profile => (
                        <CardWrapper key={profile._id}>
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
        </div>
        );

    if (width < 840){
        console.log(width);
        return(
            <Wrapper>
            <Navbar />
            <main>
                <PageWrapper>
                    <AdContainer>
                    <AdCarrier
                        width={320} 
                        height={50}
                        path="cds_leaderboard_mobile"
                    />
                    </AdContainer>
                    {ExploreContents}
                </PageWrapper>
            </main>
            </Wrapper>
        )
    } else {
        console.log(width);
        return(
            <Wrapper>
            <Navbar />
            <main>
                <PageWrapper>
                    <AdContainer>
                    <AdCarrier
                        width={728} 
                        height={90}
                        path="cds_leaderboard"
                    />
                    </AdContainer>
                    {ExploreContents}
                </PageWrapper>
            </main>
            </Wrapper>
        )
    }
}

export default Explore;
