import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ExploreBox from '../components/explorebox/index';
import MainContent from '../components/profileMainContent/index';
import { ProfilePageBox } from "../components/profilePageBox";
import { Navbar } from "../components/navbar";
import { NavbarProfile } from "../components/navbarProfile";
import { FrequencyTag } from "../components/frequencyTag/index";
import { SocialTagsBox } from "../components/socialTagsBox";
import AdCarrier from '../components/adCarrier';
import AccountTag from "../components/accountTag/index";
import YourClubProfile from "../components/yourClubProfile/index";
import CompleteProfile from "../components/completeProfile";

const ClubProfileDisplay = (profileId = 111) => {
    const { id } = useParams();
    const [pid, setPid] = useState(null);
    const [club, setClub] = useState();
    const [width, setWidth] = useState(window.innerWidth);
    const [isLoading, setLoading] = useState(true);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    /* temporary for conditional components */
    const [isLoggedin, setLoggedIn] = useState(true);
    const [firstLogIn, setFirstLog] = useState(true); //not sure how to track this as of now so I'm going to leave this as deafult true
    const [completeProfile, setComplete] = useState(true);

    useEffect(() => {
        // id && console.log("pid = ", profileId, pid === id, pid, id)
        // setPid(profileId)
        // setLoggedIn(pid === id )
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        fetch(`${window.origin}/api/clubProfiles/${id}`, {
            method: 'GET',
            })
          .then((res) => res.json())
          .then((response) => {
            setClub(response);
            setLoading(false);
            console.log(`api/clubProfiles/${id}`);
            console.log(profileId.profileId === id , profileId.profileId ,id)
            setLoggedIn(profileId.profileId === id )
          })
        //.catch((error) => console.log(error));
    }, [id]);

    const SimilarClubs = () => { return (club.similarClubs === undefined) ? (<h1>Loading</h1>) : 
        (club.similarClubs.map((profile, idx) => (
            <ExploreBox 
                key= {`p${idx}`}
                name = {profile.name}
                description = {profile.shortDescription}
                imageURL = {profile.imageUrl}
                tags = {profile.tags}
                clubSize = {profile.memberRange}
                acceptingMembers = {profile.acceptingMembers}
                applicationRequired = {profile.applicationRequired}
                cardLink={`/club/${profile._id}`}
            />
    )))};

    const ProfileNav = () => { 
        return (
        <div>
            {/* <NavbarType/> */}
            <ConditionalAccountTag/>
            <ConditionalCompleteProfile/>
            <ConditionalClubProfile/>
        </div>
        );
    }

    const ConditionalAccountTag = () => { return (firstLogIn === true) ? 
        ( <AccountTag/> ) : 
        (null) 
    };

    const ConditionalCompleteProfile = () => { return (completeProfile === true) ? 
        ( <CompleteProfile/> ) : 
        (null) 
    };

    const ConditionalClubProfile = () => { return (isLoggedin === true) ? 
        ( <YourClubProfile/> ) : 
        (null) 
    };

    const NavbarType = () => { return (isLoggedin === true) ? 
        ( <NavbarProfile/> ) : 
        ( <Navbar/> ) 
    };

    /* temporary for conditional components */
    function setAdmin(){
        setLoggedIn(!isLoggedin);
        setFirstLog(!firstLogIn);
        setComplete(!completeProfile);
    }

    if (width < 541){ // mobile view
        return (
            <>
                {!isLoading && (
                    <Wrapper>
                        <ProfileNav/>
                        <PageWrapper>
                            <Content>
                                <h1>{club.name}</h1>
                                <p>Last updated: {new Date(club.lastUpdated.toString()).toLocaleDateString("en-US", options)}</p>
                                <div><Button onClick={setAdmin}><p>Show/Hide Club Admin View</p></Button></div>
                                <ProfilePageBox 
                                    memberRange= {club.memberRange}
                                    acceptingMembers={club.acceptingMembers}
                                    applicationRequired={club.applicationRequired}
                                    tags={club.tags}
                                />
                                <FrequencyTag
                                        frequency={club.meetingFrequency[0]}
                                        weekly= {club.meetingFrequency[1]}
                                />
                                {(club.socialLinks.facebook === "" && club.socialLinks.instagram === "" && club.socialLinks.email === "" && club.socialLinks.website === "" ) ? null :
                                <SocialTagsBox
                                    socialLinks={[
                                    {
                                        key: "Facebook",
                                        link: club.socialLinks.facebook,
                                    },
                                    {
                                        key: "Instagram",
                                        link: club.socialLinks.instagram,
                                    },
                                    {
                                        key: "Email",
                                        link: club.socialLinks.email,
                                    },
                                    {
                                        key: "Website",
                                        link: club.socialLinks.website,
                                    },
                                    ]}
                                />}
                                {(club.mailingList) ?
                                <div><Button href={club.mailingList}><p>Join our mailing list</p></Button></div> : null}
                                {(club.applicationLink) ?
                                <div><Button className= "second" href={club.applicationLink}><p>Apply</p></Button></div> : null}
                                <AdContainer>
                                <AdCarrier
                                    width={300} 
                                    height={250}
                                    path="cds_horizontal_box_mobile"
                                />
                                </AdContainer>
                                <MainContent 
                                    description= {club.longDescription}
                                    highlights= {club.highlights}
                                    howToJoin= {club.howToJoin}
                                />
                                {(club.similarClubs.length === 0) ? null : <h2>Similar Clubs</h2>}
                                <SimilarClubs/> 
                            </Content>
                        </PageWrapper>
                    </Wrapper>
                )}
            </>
        );
    } else if (width < 840 && width > 540){ // tablet view
        return (
            <>
                {!isLoading && (
                    <Wrapper>
                        <ProfileNav/>
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
                                        <div><Button onClick={setAdmin}><p>Show/Hide Club Admin View</p></Button></div>
                                            <FrequencyTag
                                                frequency={club.meetingFrequency}
                                                weekly= {club.weekly}
                                            />
                                        {(club.socialLinks.facebook === "" && club.socialLinks.instagram === "" && club.socialLinks.email === "" && club.socialLinks.website === "" ) ? null :
                                        <SocialTagsBox
                                            socialLinks={[
                                            {
                                                key: "Facebook",
                                                link: club.socialLinks.facebook,
                                            },
                                            {
                                                key: "Instagram",
                                                link: club.socialLinks.instagram,
                                            },
                                            {
                                                key: "Email",
                                                link: club.socialLinks.email,
                                            },
                                            {
                                                key: "Website",
                                                link: club.socialLinks.website,
                                            },
                                            ]}
                                        />}
                                        {(club.mailingList) ?
                                        <div><Button href={club.mailingList}><p>Join our mailing list</p></Button></div> : null}
                                        {(club.applicationLink) ?
                                        <div><Button className= "second" href={club.applicationLink}><p>Apply</p></Button></div> : null}
                                        <AdContainer>
                                            <AdCarrier
                                                width={300} 
                                                height={250}
                                                path="cds_horizontal_box_mobile"
                                            />
                                        </AdContainer>
                                    </Column>
                                </Row>
                                <MainContent 
                                    description= {club.longDescription}
                                    highlights= {club.highlights}
                                    howToJoin= {club.howToJoin}
                                />
                                {(club.similarClubs.length === 0) ? null : <h2>Similar Clubs</h2>}
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
                        <ProfileNav/>
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
                                {(club.similarClubs.length === 0) ? null : <h2>Similar Clubs</h2>}
                                <SimilarClubs/> 
                            </Content>
                            <Cards>
                                <div><Button onClick={setAdmin}><p>Show/Hide Club Admin View</p></Button></div>
                                <ProfilePageBox 
                                    memberRange= {club.memberRange}
                                    acceptingMembers={club.acceptingMembers}
                                    applicationRequired={club.applicationRequired}
                                    tags={club.tags}
                                />
                                <FrequencyTag
                                            frequency={club.meetingFrequency[0]}
                                            weekly= {club.meetingFrequency[1]}
                                />
                                {(club.socialLinks.facebook === "" && club.socialLinks.instagram === "" && club.socialLinks.email === "" && club.socialLinks.website === "" ) ? null :
                                <SocialTagsBox
                                    socialLinks={[
                                    {
                                        key: "Facebook",
                                        link: club.socialLinks.facebook,
                                    },
                                    {
                                        key: "Instagram",
                                        link: club.socialLinks.instagram,
                                    },
                                    {
                                        key: "Email",
                                        link: club.socialLinks.email,
                                    },
                                    {
                                        key: "Website",
                                        link: club.socialLinks.website,
                                    },
                                    ]}
                                />}
                                {(club.mailingList) ?
                                <div><Button href={club.mailingList}><p>Join our mailing list</p></Button></div> : null}
                                {(club.applicationLink) ?
                                <div><Button className= "second" href={club.applicationLink}><p>Apply</p></Button></div> : null}
                                <AdContainer>
                                    <AdCarrier
                                        width={300} 
                                        height={250}
                                        path="cds_horizontal_box_mobile"
                                    />
                                </AdContainer>
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
    background-size: contain;  
`;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem 5rem 0rem 5rem;

    h2{
        font-size: 1.25rem;
        font-weight: 600;
    }

    @media only screen 
    and (max-width :768px) {
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
    and (min-width : 940px) {
        width: 63%;
        padding-right: 6rem;
    }
    
    h1{
        margin-bottom: 0rem;
    }
`;

const AdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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
    font-weight: 600;

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
            color: ${(props) => props.theme.colors.fullWhite};
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

export default ClubProfileDisplay;
