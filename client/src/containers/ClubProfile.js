import React from 'react';
import styled from 'styled-components';
import ExploreBox from '../components/explorebox/index';
import MainContent from '../components/profileMainContent/index';
import { ProfilePageBox } from "../components/profilePageBox";
import { Navbar } from "../components/navbar";

export const ClubProfile = () => {

    return(
        <Wrapper>
            <Navbar/>
        <PageWrapper>
            <Content>
                <MainContent // Very repetitive but left like this to visualize what props are needed for which component
                    name= 'Columbia University Jazz Ensemble'
                    description= "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                    // preferably a data object or date-formatted string
                    lastUpdated= {new Date('06/04/2020')}
                    // imgUrl will actually be an s3 link, but here is a picture of a dog
                    imageUrl= 'https://i.insider.com/5df126b679d7570ad2044f3e?width=1100&format=jpeg&auto=webp'
                    memberRange= "20-50" //or could be '20-50', either works
                    acceptingMembers= {true}
                    applicationRequired= {true}
                    meetingFrequency= 'Meets 2x a week'
                    socialLinks= {[{facebook: ''}, {email: 'cujazz@columbia.edu'}, {website: 'clubwebsite.com'}]}
                    tags= {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                    highlights= {['A caring and loving community that adheres to these values', 
                        'Friends to study, eat, and hang out with', 
                        'Weekly get togethers at the Multicultural Affairs space with food']}
                    howToJoin= "As a political group that has well-defined values, we look for students who share our values and take our community and work seriously. For this reason, we require an application. To respect everyone’s time and capacity, our application is short. If your application does not have any major issues, you will be invited to interview with us! Afterwards, we will email you with a decision. We try to be as inclusive as possible; in fact, our club has nearly doubled in size in the last two years."
                    applicationLink= "https://googl.form.abcdef12345"
                    // array of clubProfile objects
                    similarClubs= {[]}
                />
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
    )
}

const Wrapper = styled.div`
  background-color: #F4F6F8;
  background-image: url(https://clubs-cu.s3.amazonaws.com/columbia-wave.svg);
  background-repeat: no-repeat;
  background-position: top right;
`;


const PageWrapper = styled.main`
    padding: 3rem;
    display: flex;
    flex-direction: row;

    h2{
        font-size: 20px;
    }
`;

const Cards = styled.div`

`;

const Content = styled.div`

`;
