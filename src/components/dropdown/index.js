import React, { useState, useEffect, useRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { spring } from 'popmotion';
import { useFocused } from '../customHooks/index';

const Dropdown = ({ items, theme }) => {
  const [clicked, setClicked] = useState(false);
  const [title, setTitle] = useState('');
  const [titleHovered, setTitleHovered] = useState(false);
  const [curIndex, setCurIndex] = useState(-1);
  const dropdown = useRef(null);
  const dropdownFocused = useFocused(dropdown);

  useEffect(() => {
    document.addEventListener('keypress', onKeypress);
    document.addEventListener('keydown', onKeydown);
    return () => {
      document.removeEventListener('keypress', onKeypress);
      document.removeEventListener('keydown', onKeydown);
    };
  }, [curIndex, titleHovered, clicked, dropdownFocused]);

  const onKeypress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (dropdownFocused) setClicked(!clicked);
      if (clicked) {
        setTitle(items[curIndex]);
        setClicked(false);
      } else if (titleHovered) {
        setClicked(!clicked);
      }
    }
  };

  const onKeydown = e => {
    // Down arrowkey or tab is pressed
    if (e.keyCode === 40 || e.keyCode === 9) {
      if (curIndex + 1 < items.length) setCurIndex(curIndex + 1);
      else setCurIndex(0);
      // Up arrowkey is pressed
    } else if (e.keyCode === 38) {
      if (curIndex - 1 > -1) setCurIndex(curIndex - 1);
      else setCurIndex(items.length - 1);
    }
  };

  const options = items.map((item, index) => {
    return (
      <Option
        key={`option-${index + 1}`}
        animate={
          curIndex === index
            ? { backgroundColor: '#f0f0f0' }
            : { backgroundColor: theme.colors.fullWhite }
        }
        whileTap={{ backgroundColor: theme.colors.lightGray }}
        onHoverStart={() => {
          setCurIndex(index);
        }}
        onHoverEnd={() => {
          setCurIndex(-1);
        }}
        noBorder={index === items.length - 1}
        onClick={() => {
          setClicked(false);
          setTitle(item);
        }}
      >
        {item}
      </Option>
    );
  });

  return (
    <DropdownContainer>
      <TitleContainer
        ref={dropdown}
        type='button'
        onClick={() => {
          setClicked(!clicked);
        }}
        onHoverStart={() => {
          setTitleHovered(true);
        }}
        onHoverEnd={() => {
          setTitleHovered(false);
        }}
      >
        <Title>{title}</Title>
        <ArrowSvgContainer
          aria
          initial={{ backgroundColor: theme.colors.fullWhite }}
          whileHover={{ backgroundColor: '#f0f0f0' }}
        >
          <ArrowSvg
            animate={clicked ? { rotateZ: 180 } : { rotateZ: 0 }}
            viewBox='0 0 13 7'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.86543 0.373845C0.55918 0.680095 0.55918 1.17385 0.86543 1.4801L6.05918 6.67385C6.30293 6.9176 6.69668 6.9176 6.94043 6.67385L12.1342 1.4801C12.4404 1.17385 12.4404 0.680095 12.1342 0.373845C11.8279 0.067595 11.3342 0.067595 11.0279 0.373845L6.49668 4.89885L1.96543 0.367595C1.66543 0.0675955 1.16543 0.067595 0.86543 0.373845Z'
              fill='black'
              fillOpacity='0.54'
            />
          </ArrowSvg>
        </ArrowSvgContainer>
      </TitleContainer>
      <OptionsContainer
        initial={{ height: 0 }}
        animate={
          clicked
            ? { height: 'auto', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }
            : {
                height: 0,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                transition: { type: spring }
              }
        }
      >
        {options}
      </OptionsContainer>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  width: 7.1875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 1.6875rem;
`;

const Title = styled.div`
  overflow-wrap: break-word;
`;

const TitleContainer = styled(motion.button)`
  width: 100%;
  min-height: 1.25rem;
  height: auto;
  padding: 0.335rem 0.5rem;
  background-color: ${props => props.theme.colors.fullWhite};
  border: 0.03125rem solid ${props => props.theme.colors.gray};
  border-radius: 0.4375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  font-size: 1rem;
  font-family: 'Roboto', 'Arial', 'Helvetica';
  cursor: pointer;
  outline-color: ${props => props.theme.colors.blue};
`;

const ArrowSvgContainer = styled(motion.span)`
  padding: 0.25rem;
  border-radius: 5rem;
  width: 0.8125rem;
  height: 0.8125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowSvg = styled(motion.svg)`
  width: 0.8125rem;
  height: 0.4375rem;
  fill: none;
  background-color: transparent;
`;

const OptionsContainer = styled(motion.ul)`
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 0.8125rem;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const Option = styled(motion.li)`
  height: auto;
  background-color: ${props => props.theme.colors.fullWhite};
  padding: 0.5rem 0.5rem;
  border-bottom-width: ${props => (props.noBorder ? '0px' : '1px')};
  border-bottom-style: solid;
  border-bottom-color: ${props =>
    props.noBorder ? 'none' : props.theme.colors.lightGray};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  overflow-wrap: break-word;
  font-family: 'Roboto', 'Arial', 'Helvetica';
  user-select: none;
  cursor: pointer;
`;

export default withTheme(Dropdown);
