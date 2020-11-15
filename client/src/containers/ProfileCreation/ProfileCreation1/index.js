import React from 'react';
import styled from 'styled-components';
import RedAsterisk from '../../../components/redAsterisk/index';
import SearchTag from '../../../components/searchTag/index';
import Checkbox from '../../../components/checkbox/index';
import Dropdown from '../../../components/dropdown/index';
import TextInput from '../../../components/textInput/index';
import GrayTag from '../../../components/grayTag/index';
import { inputData, tagData } from './data';
import GrayTagContainer from '../../../components/grayTag/container';

const ProfileCreation1 = ({
  clubProfile,
  setClubProfile,
  clubNameRef,
  shortDescRef,
  longDescRef,
}) => {
  const tagComponents = tagData.map((tagName, index) => {
    return (
      <TagContainer key={`tag-${index}`}>
        <SearchTag
          text={tagName}
          data={clubProfile}
          setData={setClubProfile}
          objId='tags'
          dataLimitSize={5}
        />
      </TagContainer>
    );
  });

  const inputs = inputData.map((item, index) => {
    const key = Object.keys(item)[0];
    const getRef = () => {
      if (key === 'clubName') {
        console.log('clubName');
        return clubNameRef;
      } else if (key === 'shortDesc') return shortDescRef;
      else if (key === 'longDesc') return longDescRef;
    };
    return (
      <InputContainer key={`input-${index}`}>
        <TextInput
          compulsory
          width='100%'
          multiline={item[key].multiline}
          height={item[key].height}
          characterMax={item[key].characterMax}
          labelHeader={item[key].labelHeader}
          labelDesc={item[key].labelDesc}
          identifier={key}
          reference={getRef()}
        />
      </InputContainer>
    );
  });

  return (
    <StyledBody>
      <Column left>
        <TagHeader>
          <RedAsterisk>*</RedAsterisk>
          Select up to 5 tags that describe your club:
        </TagHeader>
        <TagsContainer>{tagComponents}</TagsContainer>
      </Column>
      <Column right>
        {inputs}
        <ClubSize clubProfile={clubProfile} setClubProfile={setClubProfile} />
        <NewMembers clubProfile={clubProfile} setClubProfile={setClubProfile} />
        <RequireApplication
          clubProfile={clubProfile}
          setClubProfile={setClubProfile}
        />
        <MeetFrequency
          clubProfile={clubProfile}
          setClubProfile={setClubProfile}
        />
      </Column>
    </StyledBody>
  );
};

export default ProfileCreation1;

const ClubSize = ({ clubProfile, setClubProfile }) => {
  const sizes = ['0-10', '10-20', '20-50', '50-100', '100+'];
  const sizeTags = sizes.map((size, index) => {
    return (
      <GrayTagContainer1 key={`size-${index + 1}`}>
        <GrayTag text={size} identifier={`size-${index + 1}`} />
      </GrayTagContainer1>
    );
  });
  return (
    <QuestionContainer>
      <RowHeader>
        <RedAsterisk>*</RedAsterisk> Size:
      </RowHeader>
      <FlexRow>
        <GrayTagContainer
          data={clubProfile}
          setData={setClubProfile}
          objId='size'
        >
          {sizeTags}
        </GrayTagContainer>
      </FlexRow>
    </QuestionContainer>
  );
};

const NewMembers = ({ clubProfile, setClubProfile }) => {
  const checkboxData = [
    ['left', 'Fall'],
    ['mid', 'Spring'],
    ['right', 'Not taking members'],
  ];
  const checkboxes = checkboxData.map((item, index) => {
    return (
      <CheckboxContainer key={`checkbox-${index + 1}`}>
        <Checkbox
          order={item[0]}
          labelText={item[1]}
          objId='memberPeriod'
          data={clubProfile}
          setData={setClubProfile}
        />
      </CheckboxContainer>
    );
  });
  return (
    <QuestionContainer>
      <RowHeader>
        <RedAsterisk>*</RedAsterisk> When do you take new members?
      </RowHeader>
      <FlexRow>{checkboxes}</FlexRow>
    </QuestionContainer>
  );
};

const RequireApplication = ({ clubProfile, setClubProfile }) => {
  return (
    <QuestionContainer>
      <RowHeader>
        <RedAsterisk>*</RedAsterisk> Do you require an application?
      </RowHeader>
      <FlexRow>
        <GrayTagContainer
          data={clubProfile}
          setData={setClubProfile}
          objId='requireApplication'
        >
          <GrayTagContainer1>
            <GrayTag text={'Yes'} identifier='app-1' />
          </GrayTagContainer1>
          <GrayTagContainer1>
            <GrayTag text={'No'} identifier='app-2' />
          </GrayTagContainer1>
        </GrayTagContainer>
      </FlexRow>
    </QuestionContainer>
  );
};

const MeetFrequency = ({ clubProfile, setClubProfile }) => {
  return (
    <QuestionContainer>
      <RowHeader>How often do you meet?</RowHeader>
      <FlexRow>
        <DropdownContainer>
          <Dropdown
            items={['1x', '2x', '3x', '4x or more']}
            objId='meetTime'
            index={0}
            data={clubProfile}
            setData={setClubProfile}
          />
        </DropdownContainer>
        <QuestionBody>per</QuestionBody>
        <DropdownContainer>
          <Dropdown
            items={['week', 'month']}
            objId='meetTime'
            index={1}
            data={clubProfile}
            setData={setClubProfile}
          />
        </DropdownContainer>
      </FlexRow>
    </QuestionContainer>
  );
};

const StyledBody = styled.main`
  display: grid;
  grid-template-columns: 30% 70%;
  padding-top: 1rem;
  @media only screen and (max-width: 801px) {
    grid-template-rows: auto auto !important;
    grid-template-columns: none;
    padding-top: 0.5rem;
    grid-auto-flow: dense;
  }
`;

const Column = styled.div`
  width: 100%;
  padding-left: ${(props) => (props.right ? '2.5rem' : '0rem')};
  @media only screen and (max-width: 801px) {
    padding-left: 0;
    order: ${(props) => (props.right ? '-1' : '1')};
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 45rem;
`;

const QuestionBody = styled.span`
  font-size: 1rem;
  margin-bottom: 1.1rem;
  color: ${(props) => props.theme.colors.checkboxGray};
  font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
  @media screen and (max-width: 801px) {
    margin: 0 0.75rem 0.7rem;
  }
`;

const TagHeader = styled.h3`
  font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
  font-weight: 400;
  margin-left: 0.3rem;
  font-size: 1.125rem;
`;

const TagContainer = styled.div`
  margin: 0.3rem;
`;

const InputContainer = styled.div`
  margin-bottom: 1.65rem;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 801px) {
    margin-top: 0.75rem;
  }
`;

const QuestionContainer = styled(InputContainer)`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 801px) {
    flex-direction: column;
  }
`;

const RowHeader = styled(TagHeader)`
  margin: 0;
  width: 15rem;
  @media screen and (max-width: 801px) {
    width: auto;
    max-width: 85%;
  }
`;

const CheckboxContainer = styled.div`
  margin: 0 0.75rem 0.5rem;
  @media screen and (max-width: 800px) {
    margin: 0 1.5rem 0.5rem 0;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

const DropdownContainer = styled(CheckboxContainer)`
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

const GrayTagContainer1 = styled(CheckboxContainer)`
  margin: 0 0.75rem 0.6rem;
  @media screen and (max-width: 801px) {
    margin: 0 0.5rem 0.3rem 0;
  }
`;
