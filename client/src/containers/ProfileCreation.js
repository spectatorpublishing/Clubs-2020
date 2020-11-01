import React from 'react';
import styled from 'styled-components';
import SearchTag from '../../components/searchTag/index';
import Checkbox from '../../components/checkbox/index';
import Dropdown from '../../components/dropdown/index';
import WebsiteTitle from '../../components/websiteTitle/index'
import Logout from '../../components/logout/index'

const ProfileCreation1 = () => {
  return (
    <PageContainer>
      <StyledHeader>
        <WebsiteTitle />
        <Logout />
      </StyledHeader>
      <section>
        test
      </section>
      <StyledBody>
        <div>test1</div>
        <div>test2</div>
      </StyledBody>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  padding: 0 4.375rem;
`;

const StyledBody = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 3rem;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;


export default ProfileCreation1;
