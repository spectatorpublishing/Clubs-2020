import React from 'react';
import styled from 'styled-components';
import SearchTag from '../searchTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faUser,
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";



function ClubTags({ tags }) {
  if(tags !== undefined) {
    return tags.map((tag, idx) => (
      <Tag key= {`t${idx}`}>
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

const Info = styled.div`
  color: ${(props) => props.theme.colors.gray};
  font-weight: 500;
  font-size: 1.125rem;
  margin: 0rem 0rem 0.5rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
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
        <FontAwesomeIcon icon={faUser} /> <Label>Club Size: {memberRange}</Label>
      </Info>
      <Info>
        <FontAwesomeIcon icon={(acceptingMembers) ? faCheckCircle : faTimesCircle} />{' '}
        <Label><AcceptingMembers
          isAcceptingMembers={acceptingMembers}
        ></AcceptingMembers>
        </Label>     
      </Info>
      <Info>
        <FontAwesomeIcon icon={faEdit} />{' '}
        <Label>
          <ApplicationRequired
          isApplicationRequired={applicationRequired}
          ></ApplicationRequired>
        </Label>
      </Info>
    </Box>
  );
};
const Box = styled.div`
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.fullWhite};
  width: auto;
  padding: 0.5rem 2rem 1rem 2rem;
  margin: 0.5rem 0;

  h3{
    font-size: 1.25rem;
  }
`;

const ProfileTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
`;

const Tag = styled.div`
  margin-right: 0.2rem;
  margin-top: 0.2rem;
`;

const Label = styled.div`
  margin-left: 0.5rem;
`;