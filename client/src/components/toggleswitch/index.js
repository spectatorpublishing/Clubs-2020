import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';

const ToggleSwitch = ({ theme }) => {
    const [clicked, setClicked] = useState(false);
    return (
        <ToggleSwitchWrapper>
          <Toggle
            onClick={() => {
                setClicked(!clicked);
            }}
            clicked={clicked}
          >
            <ToggleBall
              clicked={clicked}
            />
            
          </Toggle>
        </ToggleSwitchWrapper>
      );
  };
  
const ToggleSwitchWrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  background-color: ${props =>
    props.clicked
      ?'#0eb3eb'
      : '#ddd'};
  width: 2.5rem;
  height: 1.25rem;
  border-radius: 0.625rem;
  padding: 0.15rem;
`;

const ToggleBall = styled.div`
  z-index: 2;
  border-radius: 50%;
  box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
  transition: transform 0.15s cubic-bezier(1,.19,.15,.7);
  transition-delay: 0.1s;
  will-change: transform;
  background-color: ${props=>props.theme.colors.fullWhite} ;
  height: 1rem;
  width: 1rem;
  transform: ${props => props.clicked ?
    `translateX(1.56rem)` :
    'translateX(0px)'
  };
  &:active {
    background-color: ${props=>props.theme.colors.fullWhite};
  }
`;

export default withTheme(ToggleSwitch);