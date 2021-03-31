import React from 'react';
import styled from 'styled-components';
import Checkbox from '../../../components/checkbox/index';
import Dropdown from '../../../components/dropdown/index';
import GrayTagContainer from '../../../components/grayTag/container';
import GrayTag from '../../../components/grayTag/index';
import RedAsterisk from '../../../components/redAsterisk/index';
import { tagData } from './data';
import SearchTagActive from '../../../components/searchTagActive/index';

export const Tags = ({ clubProfile, setClubProfile }) => {
  const tagComponents = tagData.map((tagName, index) => {
    const checkIfIn = () => {
      let isIn = false;
      for (let i = 0; i < clubProfile.tags.length; i++)
        if (clubProfile.tags[i] === tagName) isIn = true;
      return isIn;
    };
    return (
      <SearchTagActive
        defaultValue={checkIfIn}
        margin='0.3rem'
        key={`tag-${index}`}
        text={tagName}
        data={clubProfile}
        setData={setClubProfile}
        objId='tags'
        dataLimitSize={5}
      />
    );
  });

  return (
    <section>
      <TagHeader>
        <RedAsterisk>*</RedAsterisk>
        Select up to 5 tags that describe your club:
      </TagHeader>
      <TagsContainer>{tagComponents}</TagsContainer>
    </section>
  );
};

export const NewMembers = ({ clubProfile, setClubProfile }) => {
  const checkboxData = [
    ['left', 'Fall'],
    ['mid', 'Spring'],
    ['right', 'Not taking members'],
  ];

  const checkboxes = checkboxData.map((item, index) => {
    const checkIfIn = () => {
      let isIn = false;
      for (let i = 0; i < clubProfile.memberPeriod.length; i++) {
        if (clubProfile.memberPeriod[i] === item[1]) isIn = true;
      }
      return isIn;
    };
    
    return (
      <CheckboxContainer key={`checkbox-${index + 1}`}>
        <Checkbox
          defaultValue={checkIfIn()}
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
      <FlexRow wrap='nowrap'>{checkboxes}</FlexRow>
    </QuestionContainer>
  );
};

export const RequireApplication = ({ clubProfile, setClubProfile }) => {
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
            <GrayTag
              text={'Yes'}
              identifier='app-1'
              defaultValue={clubProfile.requireApplication}
            />
          </GrayTagContainer1>
          <GrayTagContainer1>
            <GrayTag
              text={'No'}
              identifier='app-2'
              defaultValue={clubProfile.requireApplication}
            />
          </GrayTagContainer1>
        </GrayTagContainer>
      </FlexRow>
    </QuestionContainer>
  );
};

export const MeetFrequency = ({ clubProfile, setClubProfile }) => {
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
            defaultValue={clubProfile.meetTime[0]}
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
            defaultValue={clubProfile.meetTime[1]}
          />
        </DropdownContainer>
      </FlexRow>
    </QuestionContainer>
  );
};

export const ClubSize = ({ clubProfile, setClubProfile }) => {
  const sizes = ['0-10', '10-20', '20-50', '50-100', '100+'];
  const sizeTags = sizes.map((size, index) => {
    return (
      <GrayTagContainer1 key={`size-${index + 1}`}>
        <GrayTag
          text={size}
          identifier={`size-${index + 1}`}
          defaultValue={clubProfile.size}
        />
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

const InputContainer = styled.div`
  margin-bottom: 1.65rem;
`;

const TagHeader = styled.h3`
  font-weight: 600;
  margin-left: 0.3rem;
  font-size: 1.125rem;
`;

const QuestionContainer = styled(InputContainer)`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 801px) {
    flex-direction: column;
  }
`;

const QuestionBody = styled.span`
  font-size: 1rem;
  margin-bottom: 1.1rem;
  color: ${(props) => props.theme.colors.checkboxGray};
  @media screen and (max-width: 801px) {
    margin: 0 0.75rem 0.7rem;
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

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 801px) {
    margin-top: 0.75rem;
    flex-wrap: ${(props) => (props.wrap ? props.wrap : 'wrap')};
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

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 45rem;
`;
