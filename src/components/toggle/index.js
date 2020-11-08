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
            <RippleBg
              visible={clicked}
            />
          </Toggle>
        </ToggleSwitchWrapper>
      );
  };
  
// Styled components
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
    `translateX(1.25rem)` :
    'translateX(0px)'
  };
  &:active {
    background-color: ${props=>props.theme.colors.fullWhite};
  }
`;

const RippleBg = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: radial-gradient(
    circle, '#22e222' 10%, transparent 10.01%
  );
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none;
  transition: transform 0.5s, opacity 0.3s ease;
  transform: ${props => props.visible ? 'scale(10, 10)' : 'scale(0, 0)'};
  opacity: ${props => props.visible ? 1 : 0};
  position: absolute;
  z-index: 1;
`;

export default withTheme(ToggleSwitch);