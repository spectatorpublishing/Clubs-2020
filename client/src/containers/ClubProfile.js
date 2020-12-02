import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ExploreBox from '../components/explorebox/index';
import MainContent from '../components/profileMainContent/index';
import { ProfilePageBox } from "../components/profilePageBox";
import { Navbar } from "../components/navbar";
import { FrequencyTag } from "../components/frequencyTag/index";
import { SocialTagsBox } from "../components/socialTagsBox";

export const ClubProfile = () => {
    const { id } = useParams();
    const [club, setClub] = useState();
    const [width, setWidth] = useState(window.innerWidth);
    const [isLoading, setLoading] = useState(true);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        fetch(`${window.origin}/api/clubProfiles/${id}`, {
            method: 'GET',
            })
          .then((res) => res.json())
          .then((response) => {
            setClub(response);
            setLoading(false);
            console.log(`api/clubProfiles/${id}`);
          })
        //   .catch((error) => console.log(error));
    }, [id]);

    const SimilarClubs = () => { return (club.similarClubs === undefined) ? (<h1>Loading</h1>) : 
        (club.similarClubs.map(profile => (
            <ExploreBox 
                name = {profile.name}
                description = {profile.shortDescription}
                imageURL = {profile.imageUrl}
                tags = {profile.tags}
                clubSize = {profile.memberRange}
                acceptingMembers = {profile.acceptingMembers}
                applicationRequired = {profile.applicationRequired}
                cardLink={`/${profile._id}`}
            />
    )))};

    if (width < 541){ // mobile view
        return (
            <>
                {!isLoading && (
                    <Wrapper>
                        <Navbar/>
                        <PageWrapper>
                            <Content>
                                <h1>{club.name}</h1>
                                <p>Last updated: {new Date(club.lastUpdated.toString()).toLocaleDateString("en-US", options)}</p>
                                <ProfilePageBox 
                                    memberRange= {club.memberRange}
                                    acceptingMembers={club.acceptingMembers}
                                    applicationRequired={club.applicationRequired}
                                    tags={club.tags}
                                />
                                <FrequencyTag
                                    frequency={club.meetingFrequency}
                                    weekly= {club.weekly}
                                />
                                <SocialTagsBox
                                    socialLinks={[
                                    {
                                        key: "facebook",
                                        link: "https://www.facebook.com/CUBalletEnsemble/",
                                    },
                                    {
                                        key: "instagram",
                                        link: "https://www.instagram.com/cuballetensemble/",
                                    },
                                    {
                                        key: "email",
                                        link: "cuballetensemble@gmail.com",
                                    },
                                    {
                                        key: "website",
                                        link: "http://www.columbia.edu/cu/cuballetensemble/dancers",
                                    },
                                    ]}
                                />
                                <div><Button href={club.mailingList}><p>Join our mailing list</p></Button></div>
                                <div><Button className= "second" href={club.applicationLink}><p>Apply</p></Button></div>
                                <MainContent 
                                    description= {club.longDescription}
                                    highlights= {club.highlights}
                                    howToJoin= {club.howToJoin}
                                />
                                <h2>Similar Clubs</h2>
                                <SimilarClubs/> 
                            </Content>
                        </PageWrapper>
                    </Wrapper>
                )}
            </>
        );
    } else if (width < 769 && width > 540){ // tablet view
        return (
            <>
                {!isLoading && (
                    <Wrapper>
                        <Navbar/>
                        <PageWrapper>
                            <Content>
                                <h1>{club.name}</h1>
                                <p>Last updated: {new Date(club.lastUpdated.toString()).toLocaleDateString("en-US", options)}</p>
                                <Row>
                                    <ProfilePageBox 
                                        memberRange= {club.memberRange}
                                        acceptingMembers={club.acceptingMembers}
                                        applicationRequired={club.applicationRequired}
                                        tags={club.tags}
                                    />
                                    <Column>
                                        <FrequencyTag
                                            frequency={club.meetingFrequency}
                                            weekly= {club.weekly}
                                        />
                                    <SocialTagsBox
                                        socialLinks={[
                                        {
                                            key: "facebook",
                                            link: "https://www.facebook.com/CUBalletEnsemble/",
                                        },
                                        {
                                            key: "instagram",
                                            link: "https://www.instagram.com/cuballetensemble/",
                                        },
                                        {
                                            key: "email",
                                            link: "cuballetensemble@gmail.com",
                                        },
                                        {
                                            key: "website",
                                            link: "http://www.columbia.edu/cu/cuballetensemble/dancers",
                                        },
                                        ]}
                                    />
                                        <div><Button href={club.mailingList}><p>Join our mailing list</p></Button></div>
                                        <div><Button className= "second" href={club.applicationLink}><p>Apply</p></Button></div>
                                    </Column>
                                </Row>
                                <MainContent 
                                    description= {club.longDescription}
                                    highlights= {club.highlights}
                                    howToJoin= {club.howToJoin}
                                />
                                <h2>Similar Clubs</h2>
                                <SimilarClubs/> 
                            </Content>
                        </PageWrapper>
                    </Wrapper>
                )}
            </>
        );
    } else { // desktop view
        return (
            <>
                {!isLoading && (
                    <Wrapper>
                        <Navbar/>
                        <PageWrapper>
                            <Content>
                                <h1>{club.name}</h1>
                                <p>Last updated: {club.lastUpdated && 
                                    new Date(club.lastUpdated.toString()).toLocaleDateString("en-US", options)}</p>
                                <MainContent 
                                    description= {club.longDescription}
                                    highlights= {club.highlights}
                                    howToJoin= {club.howToJoin}
                                />
                                <h2>Similar Clubs</h2>
                                <SimilarClubs/> 
                            </Content>
                            <Cards>
                                <ProfilePageBox 
                                    memberRange= {club.memberRange}
                                    acceptingMembers={club.acceptingMembers}
                                    applicationRequired={club.applicationRequired}
                                    tags={club.tags}
                                />
                                <FrequencyTag
                                    frequency={club.meetingFrequency}
                                    weekly= {club.weekly}
                                />
                                 <SocialTagsBox
                                    socialLinks={[
                                    {
                                        key: "facebook",
                                        link: "https://www.facebook.com/CUBalletEnsemble/",
                                    },
                                    {
                                        key: "instagram",
                                        link: "https://www.instagram.com/cuballetensemble/",
                                    },
                                    {
                                        key: "email",
                                        link: "cuballetensemble@gmail.com",
                                    },
                                    {
                                        key: "website",
                                        link: "http://www.columbia.edu/cu/cuballetensemble/dancers",
                                    },
                                    ]}
                                />
                                <div><Button href={club.mailingList}><p>Join our mailing list</p></Button></div>
                                <div><Button className= "second" href={club.applicationLink}><p>Apply</p></Button></div>
                            </Cards>
                        </PageWrapper>
                    </Wrapper>
                )}
            </>
        );
    }
};

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.colors.white};
  background-image: url(https://clubs-cu.s3.amazonaws.com/Profile+Wave.svg);
  background-repeat: no-repeat;
  background-position: top right;
  width: fit-content;
  
`;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 5rem 0rem 5rem;

    h2{
        font-size: 1.3rem;
    }

    @media only screen 
    and (max-width : 768px) {
        padding: 1.2rem;
    }
`;

const Cards = styled.div`
    width: 30%;
    margin-top: 8rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen 
    and (min-width : 769px) {
        width: 63%;
        padding-right: 6rem;
    }
    
    h1{
        margin-bottom: 0rem;
    }
`;

const Button = styled.a`
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.red};
    display: flex;
    padding: 0.8rem 1.6rem;
    margin: 1rem 0rem;
    border-radius: 5px;
    font-size: 1.2rem;
    
    p{
        text-align: center; 
        margin: 0 auto;
        color: ${(props) => props.theme.colors.red};
    }
    
    :hover{
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
    }

    &.second{
        background-color: ${(props) => props.theme.colors.red};
        p{
            color: ${(props) => props.theme.colors.fullWhite};;
        }
    }

    @media only screen 
    and (max-width : 768px) {
        margin: 0.5rem 0rem;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
    width: 100%;
    margin-left: 1rem;
`;