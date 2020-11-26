import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.fullWhite};
  height: 3.5rem;
  width: 20rem;
  padding: 0 2rem;
  border-radius: 7px;
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.05);
  align-items: center;

  @media screen and (max-width: 425px) {
    margin: 0 2rem;
    width: 70%;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.checkboxGray};
  font-weight: 500;
`;

const Tag = styled.p`
  color: ${(props) => props.theme.colors.turquoise};
  border: 0.15rem solid ${(props) => props.theme.colors.turquoise};
  border-radius: 1rem;
  padding: 0.2rem 1rem;
  margin: 0 1rem;
  text-align: bottom;
  font-weight: 500;

  &.once {
    background: rgba(66, 183, 203, 0.08);
  }
  
  &.twice {
    background: rgba(66, 183, 203, 0.15);
  }

  &.three-times {
    background: rgba(66, 183, 203, 0.25);
  }

  &.greater-three {
    background: rgba(66, 183, 203, 0.35);
  }
`;

export const FrequencyTag = ({ frequency, weekly }) => {
    const Rate = weekly ? <><Text>per week</Text></> : <><Text>per month</Text></>;
    
    return (
        <Box>
            <Text>Meets</Text>
            {(() => {
                if (frequency==="1") {
                    return <Tag className="once">1x</Tag>
                } else if (frequency==="2") {
                    return <Tag className="twice">2x</Tag>
                } else if (frequency==="3") {
                    return <Tag className="three-times">3x</Tag>
                } else {
                    return <Tag className="greater-three">{'>'}3x</Tag>
                }
            })()}
            {Rate}
        </Box>
    );
};

export default FrequencyTag;