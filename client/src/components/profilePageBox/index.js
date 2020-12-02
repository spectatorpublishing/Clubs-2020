import React from 'react';
import styled from 'styled-components';
import SearchTag from '../searchTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faUser,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";



function ClubTags({ tags }) {
  if(tags !== undefined) {
    return tags.map((tag) => (
      <Tag>
        <SearchTag text={tag} />
      </Tag>
    ));
    } else {
      return null;
    }
}

function AcceptingMembers({ isAcceptingMembers }) {
  if (isAcceptingMembers) {
    return 'Accepting Members';
  } else {
    return 'Not Accepting Members';
  }
}

function ApplicationRequired({ isApplicationRequired }) {
  if (isApplicationRequired) {
    return 'Application Required';
  } else {
    return 'No Application Required';
  }
}

const Info = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-weight: 700;
`;

export const ProfilePageBox = ({
  memberRange,
  acceptingMembers,
  applicationRequired,
  tags,
}) => {
  return (
    <Box>
      <h3>Overview</h3>
      <ProfileTags>
        <ClubTags tags={tags} />
      </ProfileTags>
      <Info>
        <FontAwesomeIcon icon={faUser} /> Club Size: {memberRange}
      </Info>
      <Info>
        <FontAwesomeIcon icon={faCheckCircle} />{' '}
        <AcceptingMembers
          isAcceptingMembers={acceptingMembers}
        ></AcceptingMembers>
      </Info>
      <Info>
        <FontAwesomeIcon icon={faEdit} />{' '}
        <ApplicationRequired
          isApplicationRequired={applicationRequired}
        ></ApplicationRequired>
      </Info>
    </Box>
  );
};
const Box = styled.div`
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.fullWhite};
  width: auto;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
`;

const ProfileTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  margin-right: 0.2rem;
  margin-top: 0.2rem;
`;
