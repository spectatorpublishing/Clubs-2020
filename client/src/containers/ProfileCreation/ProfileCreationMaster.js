import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileCreation1 from './ProfileCreation1/index';
import ProfileCreation2 from './ProfileCreation2/index';
import { Confirmation } from '../Confirmation';

const ProfileCreationMaster = ({ userCred }) => {
  const [clubProfile, setClubProfile] = useState({
    tags: [],
    clubName: '',
    shortDesc: '',
    longDesc: '',
    size: '',
    memberPeriod: [],
    requireApplication: '',
    meetTime: ['', ''],
    highlights: ['', '', '', '', ''],
    howToJoin: '',
    appLink: '',
    website: '',
    facebook: '',
    instagram: '',
    twitter: '',
    clubEmail: '',
    mailingListLink: '',
  });

  useEffect(() => {
    if(userCred !== null) {
      fetch(`/api/clubAccounts/getByFirebaseId/${userCred.uid}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(data => {
          fetch(`${window.origin}/api/clubProfiles/${data.clubProfileId}`, {
            method: 'GET',
            })
          .then((res) => res.json())
          .then((response) => {
            setClubProfile(parseFromDB(response));
          })
          .catch((error) => console.log(error));
        });
    }
  }, []);

  const parseState = ((newClubProfile) => {
    const toSubmit = {
      name: newClubProfile.clubName,
      longDescription: newClubProfile.longDesc,
      shortDescription: newClubProfile.shortDesc,
      // NEED TO UPDATE THIS-- MAKE THEM CHOOSE FROM PRECONFIGURED IMAGES OR THEIR OWN LOGO
      // ASK PRODUCT DESIGN???
      imageUrl: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png",
      memberRange: newClubProfile.size,
      // this is not used rn, but we should update it to take advantage of their preferences
      acceptingMembers: !newClubProfile.memberPeriod.includes('Not taking members'),
      springRecruiting: newClubProfile.memberPeriod.includes('Spring'),
      fallRecruiting: newClubProfile.memberPeriod.includes('Fall'),
      applicationRequired: newClubProfile.requireApplication === 'Yes',
      meetingFrequency: newClubProfile.meetTime,
      socialLinks: {
          facebook: newClubProfile.facebook,
          email: newClubProfile.clubEmail,
          website: newClubProfile.website,
          instagram: newClubProfile.instagram,
          twitter: newClubProfile.twitter
      },
      tags: newClubProfile.tags,
      highlights: newClubProfile.highlights,
      howToJoin: newClubProfile.howToJoin,
      applicationLink: newClubProfile.appLink,
      mailingListLink: newClubProfile.mailingListLink,
      showInstagramFeed: false,
    };

    return toSubmit;
  });

  const parseFromDB = (profile => {
    const memberPeriod = [];

    if(profile.fallRecruiting) memberPeriod.push("Fall");
    if(profile.springRecruiting) memberPeriod.push("Spring");
    if(profile.acceptingMembers) memberPeriod.push('Not taking members');

    return {
      tags: profile.tags,
      clubName: profile.name,
      shortDesc: profile.shortDescription,
      longDesc: profile.longDescription,
      size: profile.memberRange,
      memberPeriod: memberPeriod,
      requireApplication: profile.applicationRequired ? 'Yes' : 'No',
      meetTime: profile.meetingFrequency,
      highlights: profile.highlights,
      howToJoin: profile.howToJoin,
      appLink: profile.applicationLink,
      website: profile.socialLinks.website,
      facebook: profile.socialLinks.facebook,
      instagram: profile.socialLinks.instagram,
      twitter: profile.socialLinks.twitter,
      clubEmail: profile.socialLinks.email,
      mailingListLink: profile.mailingListLink,
    };
  });

  const submitProfile = (newClubProfile, submitting) => {      
    fetch(`/api/clubAccounts/getByFirebaseId/${userCred.uid}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        fetch(`/api/clubProfiles/update/${data._id}${submitting ? '?submit=true' : ''}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(parseState(newClubProfile))
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => console.error(error));
      });
  };

  // Updates state based on input text
  return (
    <>
      <PageContainer>
        <SetUpClubProfile />
        <Router>
          <Switch>
          <Route
              path='/profile-creation/1'
              exact
              render={(props) => (
                <ProfileCreation2
                  {...props}
                  clubProfile={clubProfile}
                  setClubProfile={setClubProfile}
                  userCred={userCred}
                  submitProfile={submitProfile}
                />
              )}
            />
            <Route
              path='/profile-creation'
              exact
              render={(props) => (
                <ProfileCreation1
                  {...props}
                  clubProfile={clubProfile}
                  setClubProfile={setClubProfile}
                  userCred={userCred}
                  saveHandler={submitProfile}
                />
              )}
            />
            <Route path='/confirm' component={Confirmation} />
          </Switch>
        </Router>
      </PageContainer>
    </>
  );
};

export default ProfileCreationMaster;

const SetUpClubProfile = () => {
  return (
    <section>
      <ClubProfileTitle>Set Up Your Club Profile</ClubProfileTitle>
      <Subtext>Complete your profile for maximum outreach</Subtext>
    </section>
  );
};
const ClubProfileTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0;
  padding-top: 5rem;
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem !important;
  }
`;

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  padding: 8rem 3rem 0 4rem;
  @media only screen and (max-width: 768px) {
    padding: 0 1.375rem !important;
  }
`;

export const PageDesc = styled.h2`
  font-weight: 600;
  padding-left: 0rem;
  @media only screen and (max-width: 600px) {
    font-size: 1rem !important;
  }
`;

const Subtext = styled.h3`
  color: ${(props) => props.theme.colors.gray};
  margin-top: 0.5rem;
  font-weight: 500;
  @media only screen and (max-width: 600px) {
    font-size: 0.875rem !important;
  }
`;

export const ErrorMessage = styled(motion.div)`
  color: ${(props) => props.theme.colors.red};
  margin: 0.8rem 0;
`;
