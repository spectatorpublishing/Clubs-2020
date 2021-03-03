import React, { useRef } from 'react';
import styled from 'styled-components';
import { PageDesc } from '../ProfileCreationMaster';
import { withRouter } from 'react-router-dom';
import { Highlights, Socials } from './helpers';
import TextInput from '../../../components/textInput/index';
import TomatoButton from '../../../components/tomatoButton/index';

const ProfileCreation2 = ({ clubProfile, setClubProfile, history }) => {
  const highlight1 = useRef(null);
  const highlight2 = useRef(null);
  const highlight3 = useRef(null);
  const highlight4 = useRef(null);
  const highlight5 = useRef(null);
  const howToJoin = useRef(null);
  const linkToApplication = useRef(null);

  const website = useRef(null);
  const facebook = useRef(null);
  const instagram = useRef(null);
  const twitter = useRef(null);
  const clubEmail = useRef(null);
  const mailingListLink = useRef(null);

  const refsToCheck = [
    highlight1,
    highlight2,
    highlight3,
    highlight4,
    highlight5,
    howToJoin,
    linkToApplication,
    website,
    facebook,
    instagram,
    twitter,
    clubEmail,
    mailingListLink,
  ];
  const handleClick = (to) => {
    let everythingDefined = true;
    for (let i = 0; i < refsToCheck.length; i++)
      if (!refsToCheck[i].current) everythingDefined = false;
    if (everythingDefined) {
      let tempProfile = { ...clubProfile };
      for (let i = 0; i < tempProfile.highlights.length; i++)
        tempProfile.highlights[i] = refsToCheck[i].current.value;
      tempProfile.howToJoin = howToJoin.current.value;
      tempProfile.appLink = linkToApplication.current.value;
      tempProfile.website = website.current.value;
      tempProfile.facebook = facebook.current.value;
      tempProfile.instagram = instagram.current.value;
      tempProfile.twitter = twitter.current.value;
      tempProfile.clubEmail = clubEmail.current.value;
      tempProfile.mailingListLink = mailingListLink.current.value;
      setClubProfile(tempProfile);
      if (to) history.push(to);
    } else console.error('ONE OF THE REFS IS NOT DEFINED!');
  };

  return (
    <ProfileContainer>
      <section>
        <PageDesc>Get-to-Know-You's: Why Students Should Join</PageDesc>
        <TextInputContainer>
          <Highlights
            clubProfile={clubProfile}
            highlightRefs={[
              highlight1,
              highlight2,
              highlight3,
              highlight4,
              highlight5,
            ]}
          />

          <TextInput
            identifier='join-text'
            labelHeader='How to join:'
            reference={howToJoin}
            defaultValue={clubProfile.howToJoin}
            labelDesc='500 characters max (Displayed on your club profile)'
            characterMax={500}
            multiline
            labelWidth='8.75rem'
            width='100%'
            height='11.25rem'
          />
          <TextInput
            identifier='application-text'
            defaultValue={clubProfile.appLink}
            labelHeader='Link to application:'
            labelDesc='(if any)'
            labelWidth='8.75rem'
            reference={linkToApplication}
            width='100%'
          />
        </TextInputContainer>
      </section>
      <section>
        <PageDesc>Links and Socials</PageDesc>
        <TextInputContainer>
          <Socials
            clubProfile={clubProfile}
            socialRefs={[
              website,
              facebook,
              instagram,
              twitter,
              clubEmail,
              mailingListLink,
            ]}
          />
        </TextInputContainer>
      </section>
      <ButtonContainer>
        <TomatoButton
          wire
          text='Back'
          onClick={() => {
            handleClick('/profile-creation/');
          }}
        />
        <TomatoButton
          text='Next'
          onClick={() => {
            handleClick();
          }}
        />
      </ButtonContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 801px) {
    width: 100%;
  }
`;

const TextInputContainer = styled.div`
  width: max(42.75rem, 67.5%);
  @media screen and (max-width: 801px) {
    width: inherit;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

export default withRouter(ProfileCreation2);
