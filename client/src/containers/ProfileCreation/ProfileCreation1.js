import React from 'react';
import styled from 'styled-components';

import SearchTag from '../../components/searchTag/index';
import Checkbox from '../../components/checkbox/index';
import Dropdown from '../../components/dropdown/index';
import FilledButton from '../../components/filledButton/index';
const ProfileCreation1 = () => {
  return (
    <StyledBody>
      <Column>
        <div>test1</div>
      </Column>
      <Column>
        <FilledButton text='Next' path='profile-creation/2' />
      </Column>
    </StyledBody>
  );
};

const StyledBody = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 3rem;
`;

const Column = styled.div`
  max-width: 50%;
`;

export default ProfileCreation1;
